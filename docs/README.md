# Community::Monitoring::Website

During the creation of a simple website you may want to provision a third-party website monitor, which has a public API.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Community::Monitoring::Website",
    "Properties" : {
        "<a href="#pinginterval" title="PingInterval">PingInterval</a>" : <i>Double</i>,
    }
}
</pre>

### YAML

<pre>
Type: Community::Monitoring::Website
Properties:
    <a href="#pinginterval" title="PingInterval">PingInterval</a>: <i>Double</i>
</pre>

## Properties

#### PingInterval

Ping interval to monitor in minutes

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Name.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Name

The name of your website monitor.

#### WebsiteUrl

The URL of your website that will be monitored.

#### MonitoringPage

The status page for your website monitoring.


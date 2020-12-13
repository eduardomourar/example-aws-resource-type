# Example::Monitoring::Website

During the creation of a simple website you may want to provision a third-party website monitor, which has a public API.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Example::Monitoring::Website",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#websiteurl" title="WebsiteUrl">WebsiteUrl</a>" : <i>String</i>,
        "<a href="#pinginterval" title="PingInterval">PingInterval</a>" : <i>Double</i>,
    }
}
</pre>

### YAML

<pre>
Type: Example::Monitoring::Website
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#websiteurl" title="WebsiteUrl">WebsiteUrl</a>: <i>String</i>
    <a href="#pinginterval" title="PingInterval">PingInterval</a>: <i>Double</i>
</pre>

## Properties

#### Name

The name of your website monitor.

_Required_: Yes

_Type_: String

_Minimum_: <code>3</code>

_Maximum_: <code>50</code>

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### WebsiteUrl

The URL of your website that will be monitored.

_Required_: Yes

_Type_: String

_Pattern_: <code>^https?://[^\s/$.?#].[^\s]*$</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

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

#### MonitoringPage

The status page for your website monitoring.


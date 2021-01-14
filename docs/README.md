# Example::Monitoring::Website

During the creation of a simple website you may want to provision a third-party website monitor, which has a public API.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Example::Monitoring::Website",
    "Properties" : {
        "<a href="#apikey" title="ApiKey">ApiKey</a>" : <i>String</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#uri" title="Uri">Uri</a>" : <i>String</i>,
        "<a href="#frequency" title="Frequency">Frequency</a>" : <i>Integer</i>,
    }
}
</pre>

### YAML

<pre>
Type: Example::Monitoring::Website
Properties:
    <a href="#apikey" title="ApiKey">ApiKey</a>: <i>String</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#uri" title="Uri">Uri</a>: <i>String</i>
    <a href="#frequency" title="Frequency">Frequency</a>: <i>Integer</i>
</pre>

## Properties

#### ApiKey

API Key that allows using the REST API on the monitors of an account.

_Required_: Yes

_Type_: String

_Minimum_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The friendly name of the website monitor.

_Required_: Yes

_Type_: String

_Minimum_: <code>3</code>

_Maximum_: <code>50</code>

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Uri

The URI of your website that will be monitored.

_Required_: Yes

_Type_: String

_Pattern_: <code>^https?://[^\s/$.?#].[^\s]*$</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Frequency

The frequency interval for the monitoring check (in minutes).

_Required_: No

_Type_: Integer

_Allowed Values_: <code>1</code> | <code>5</code> | <code>10</code> | <code>15</code> | <code>30</code> | <code>60</code> | <code>360</code> | <code>720</code> | <code>1440</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

The ID of the website monitor.

#### Kind

The type of the website monitor.

#### Locations

The locations from where your website will be checked.

#### Status

The status of your website monitoring.

#### SlaThreshold

The SLA threshold for the monitoring check (in seconds).


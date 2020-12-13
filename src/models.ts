// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from 'cfn-rpdk';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Example::Monitoring::Website';

    @Exclude()
    protected readonly IDENTIFIER_KEY_NAME: string = '/properties/Name';

    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'WebsiteUrl' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'websiteUrl', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    websiteUrl?: Optional<string>;
    @Expose({ name: 'PingInterval' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'pingInterval', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    pingInterval?: Optional<number>;
    @Expose({ name: 'MonitoringPage' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'monitoringPage', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    monitoringPage?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.name != null) {
            identifier[this.IDENTIFIER_KEY_NAME] = this.name;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}


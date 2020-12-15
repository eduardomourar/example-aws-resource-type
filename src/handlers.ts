import {
    Action,
    BaseResource,
    exceptions,
    handlerEvent,
    HandlerErrorCode,
    LoggerProxy,
    OperationStatus,
    Optional,
    ProgressEvent,
    ResourceHandlerRequest,
    SessionProxy
} from 'cfn-rpdk';

import { ResourceModel } from './models';

interface CallbackContext extends Record<string, any> {};

const MONITORING_PAGE = 'https://status.aws.amazon.com';

class Resource extends BaseResource<ResourceModel> {

    /**
     * CloudFormation invokes this handler when the resource is initially created
     * during stack create operations.
     *
     * @param session Current AWS session passed through from caller
     * @param request The request object for the provisioning request passed to the implementor
     * @param callbackContext Custom context object to allow the passing through of additional
     * state or metadata between subsequent retries
     */
    @handlerEvent(Action.Create)
    public async create(
        session: Optional<SessionProxy>,
        request: ResourceHandlerRequest<ResourceModel>,
        callbackContext: CallbackContext,
        logger: LoggerProxy
    ): Promise<ProgressEvent> {
        logger.log('request', request);
        
        // It is important that we create a new instance of the model,
        // because the desired state is immutable.
        const model = new ResourceModel(request.desiredResourceState);
        const progress = ProgressEvent.progress<ProgressEvent<ResourceModel, CallbackContext>>(model);

        // MonitoringPage is a read only property, which means that
        // it cannot be set during creation or update operations.
        if (model.monitoringPage) {
            throw new exceptions.InvalidRequest('Read only property [MonitoringPage] cannot be provided by the user.');
        }

        try {
            if (!model.pingInterval) {
                model.pingInterval = 5;
            }
            // Here you would call the monitoring public API to create the resource
            model.monitoringPage = MONITORING_PAGE;

            // Setting Status to success will signal to CloudFormation that the operation is complete
            progress.status = OperationStatus.Success;
        } catch(err) {
            logger.log(err);
            throw new exceptions.InternalFailure(err.message);
        }
        logger.log('progress', progress);
        return progress;
    }

    /**
     * CloudFormation invokes this handler when the resource is updated
     * as part of a stack update operation.
     *
     * @param session Current AWS session passed through from caller
     * @param request The request object for the provisioning request passed to the implementor
     * @param callbackContext Custom context object to allow the passing through of additional
     * state or metadata between subsequent retries
     */
    @handlerEvent(Action.Update)
    public async update(
        session: Optional<SessionProxy>,
        request: ResourceHandlerRequest<ResourceModel>,
        callbackContext: CallbackContext,
        logger: LoggerProxy
    ): Promise<ProgressEvent> {
        logger.log('request', request);
        const model = new ResourceModel(request.desiredResourceState);
        const progress = ProgressEvent.progress<ProgressEvent<ResourceModel, CallbackContext>>(model);
        const { name, monitoringPage } = request.previousResourceState;

        if (!model.name) {
            throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
        } else if (model.name !== name) {
            // The Name is a create only property, which means that it cannot be updated.
            logger.log(this.typeName, `[NEW ${model.name}] [${request.logicalResourceIdentifier}] does not match identifier from saved resource [OLD ${name}].`);
            throw new exceptions.NotUpdatable('Create only property [Name] cannot be updated.');
        } else if (model.monitoringPage !== monitoringPage) {
            logger.log(this.typeName, `[NEW ${model.monitoringPage}] [${request.logicalResourceIdentifier}] does not match identifier from saved resource [OLD ${monitoringPage}].`);
            throw new exceptions.NotUpdatable('Read only property [MonitoringPage] cannot be updated.');
        }

        try {
            if (!model.pingInterval) {
                model.pingInterval = 5;
            }
            // Here you would call the monitoring public API to update the resource
            model.monitoringPage = MONITORING_PAGE;

            progress.status = OperationStatus.Success;
        } catch(err) {
            logger.log(err);
            return ProgressEvent.failed(HandlerErrorCode.InternalFailure, err.message);
        }
        logger.log('progress', progress);
        return progress;
    }

    /**
     * CloudFormation invokes this handler when the resource is deleted, either when
     * the resource is deleted from the stack as part of a stack update operation,
     * or the stack itself is deleted.
     *
     * @param session Current AWS session passed through from caller
     * @param request The request object for the provisioning request passed to the implementor
     * @param callbackContext Custom context object to allow the passing through of additional
     * state or metadata between subsequent retries
     */
    @handlerEvent(Action.Delete)
    public async delete(
        session: Optional<SessionProxy>,
        request: ResourceHandlerRequest<ResourceModel>,
        callbackContext: CallbackContext,
        logger: LoggerProxy
    ): Promise<ProgressEvent> {
        logger.log('request', request);
        const model = new ResourceModel(request.desiredResourceState);
        const progress = ProgressEvent.progress<ProgressEvent<ResourceModel, CallbackContext>>();

        // The Name property, being the primary identifier, cannot be left empty.
        if (!model.name) {
            throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
        }

        // Here you would call the monitoring public API to delete the resource

        progress.status = OperationStatus.Success;
        logger.log('progress', progress);
        return progress;
    }

    /**
     * CloudFormation invokes this handler as part of a stack update operation when
     * detailed information about the resource's current state is required.
     *
     * @param session Current AWS session passed through from caller
     * @param request The request object for the provisioning request passed to the implementor
     * @param callbackContext Custom context object to allow the passing through of additional
     * state or metadata between subsequent retries
     */
    @handlerEvent(Action.Read)
    public async read(
        session: Optional<SessionProxy>,
        request: ResourceHandlerRequest<ResourceModel>,
        callbackContext: CallbackContext,
        logger: LoggerProxy
    ): Promise<ProgressEvent> {
        logger.log('request', request);
        const model = new ResourceModel(request.desiredResourceState);

        if (!model.name) {
            throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
        }

        // Here you would call the monitoring public API to describe the resource
        model.websiteUrl = 'https://aws.amazon.com';
        model.pingInterval = 5;
        model.monitoringPage = MONITORING_PAGE;

        const progress = ProgressEvent.success<ProgressEvent<ResourceModel, CallbackContext>>(model);
        logger.log('progress', progress);
        return progress;
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

export const entrypoint = resource.entrypoint;

export const testEntrypoint = resource.testEntrypoint;

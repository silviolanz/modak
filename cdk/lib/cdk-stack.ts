import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as path from 'path';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloWorldLambda = new lambda.Function(this, 'HelloWorldLambda', {
      runtime: lambda.Runtime.GO_1_X,
      handler: 'hello-world',
      code: lambda.Code.fromAsset(path.join(__dirname, '../hello-world')),
    });

    const api = new apigateway.RestApi(this, 'HelloWorldApi', {
      restApiName: 'Hello World Service',
      description: 'This service serves hello world.',
    });

    const getHelloWorldIntegration = new apigateway.LambdaIntegration(helloWorldLambda, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    });

    api.root.addMethod('GET', getHelloWorldIntegration);
  }
}
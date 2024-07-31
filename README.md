# modak
Technical Test: 

Create a public repository on github that have a golang hello world code, and via CDK on typescript create an AWS lambda function with that code that will be invoked via one GET ApiGateway endpoint, and it must be deployed to AWS via Github actions.

My Solution:

First of all, I created a public github repo named 'modak'.
As I started from zero, I had to install all dependencies.
(npm and node), find the right versions and finally installed go.
After that, I created the main.go file with a simple hello-world code, initialized a go module and tested it locally.
Once that worked, I initialized a new CDK project in the root directory of my repo (cdk init app --language typescript).
I added dependencies for AWS Lambda and API Gateway (npm install @aws-cdk/aws-lambda @aws-cdk/aws-apigateway).
Then I modified lib/cdk-stack.ts and bin/cdk.ts, moved my hello-world app to cdk directory and built the app.
I created .github/workflows with deploy.yml file to set up the CI/CD.
And finally I commited and pushed my changes and configured AWS credentials as secrets on github actions.

Troubleshooting:

I encountered multiple issues during the process.
I had to upgrade AWS CDK to v2 modifying package.json, lib/cdk-stack.ts and bin/cdk.ts files.
I had to bootstrap my AWS Environment (cdk bootstrap aws://<ACCOUNT_ID>/<REGION>).
I had to update my deploy.yml to use newer versions of go and node.
I had to rebuild my lambda code to in order to make it work in AWS.
I had to define dependencies in go.mod and created go.sum to ensure integrity and security.
I had to update the lambda runtime (runtime: lambda.Runtime.PROVIDED_AL2023).
I used Cloudwatch logs to identify the issues.

Testing: 

I verified that all the resources were created correctly checking the Cloudformation stack.
I opened API Gateway services, went to Stages and hit the URL, and received the correct response.

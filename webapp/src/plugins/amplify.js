import Vue from "vue";
import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import aws_exports from "../../../venue/aws-exports";
Amplify.configure(aws_exports);

Vue.use(AmplifyPlugin, AmplifyModules);

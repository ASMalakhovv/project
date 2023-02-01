import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack, {WebpackPluginInstance} from "webpack";

export const buildPlugins = (): WebpackPluginInstance[] => {
  return [
      new HTMLWebpackPlugin({
          template: path.resolve(__dirname, 'public', 'index.html')
      }),
      new webpack.ProgressPlugin(),
  ]
}

import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from "webpack"

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
            auto: (resPath: string) => Boolean(resPath.includes(".module."))
          }
        }
      },
      "sass-loader",
    ],
  }

  const typescriptLoader =  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const fileLoader = 
    {
      test: /\.(png|jpe?g|gif|woff|woff2)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }
  

  return [
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ]
}
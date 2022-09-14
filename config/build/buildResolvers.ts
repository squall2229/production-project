import { ResolveOptions } from "webpack";

export function buuldResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}
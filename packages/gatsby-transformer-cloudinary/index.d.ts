import { Node, NodePluginArgs, Reporter } from 'gatsby';

export function createCloudinaryAssetNode(
  args: CreateCloudinaryAssetNodeArgs,
): CloudinaryAssetNode;

export interface CreateCloudinaryAssetNodeArgs {
  cloudName: string;
  createContentDigest: NodePluginArgs['createContentDigest'];
  createNode: NodePluginArgs['actions']['createNode'];
  createNodeId: NodePluginArgs['createNodeId'];
  originalHeight: number;
  originalWidth: number;
  parentNode: Node;
  publicId: string;
  relationshipName: string;
  version?: number;
}

export function createRemoteImageNode(
  args: CreateRemoteImageNodeArgs,
): Promise<CloudinaryAssetNode>;

export interface CreateRemoteImageNodeArgs {
  url: string;
  parentNode: Node;
  relationshipName: string;
  overwriteExisting?: boolean;
  createContentDigest: NodePluginArgs['createContentDigest'];
  createNode: NodePluginArgs['actions']['createNode'];
  createNodeId: NodePluginArgs['createNodeId'];
  reporter: Reporter;
}

export interface CloudinaryAssetNode {
  cloudName: string;
  public_id: string;
  version: number;
  originalHeight: number;
  originalWidth: number;
  breakpoints: number[];
  id: string;
  parent: string;
  internal: {
    type: string;
    contentDigest: string;
    counter: number;
    owner: string;
  };
  children: string[];
}

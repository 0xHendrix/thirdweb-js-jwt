<p align="center">
<br />
<a href="https://thirdweb.com"><img src="https://github.com/thirdweb-dev/typescript-sdk/blob/main/logo.svg?raw=true" width="200" alt=""/></a>
<br />
</p>
<h1 align="center">thirdweb JavaScript/TypeScript monorepo</h1>
<p align="center">
<a href="https://github.com/thirdweb-dev/js/actions/workflows/CI.yml"><img alt="Build Status" src="https://github.com/thirdweb-dev/js/actions/workflows/CI.yml/badge.svg"/></a>
<a href="https://discord.gg/thirdweb"><img alt="Join our Discord!" src="https://img.shields.io/discord/834227967404146718.svg?color=7289da&label=discord&logo=discord&style=flat"/></a>
</p>
<p align="center"><strong>Best in class web3 SDKs for Browser, Node and Mobile apps</strong></p>
<br />

## Packages

| Package                                               | Description                                                          | Latest Version                                                                                                                                                                   |
| ----------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@thirdweb-dev/sdk](./packages/sdk/README.md)         | Best in class web3 SDK for Browser, Node and Mobile apps             | <a href="https://www.npmjs.com/package/@thirdweb-dev/sdk"><img src="https://img.shields.io/npm/v/@thirdweb-dev/sdk?color=red&label=npm&logo=npm" alt="npm version"/></a>         |
| [@thirdweb-dev/react](./packages/react/README.md)     | Ultimate collection of React hooks for your web3 apps                | <a href="https://www.npmjs.com/package/@thirdweb-dev/react"><img src="https://img.shields.io/npm/v/@thirdweb-dev/react?color=red&label=npm&logo=npm" alt="npm version"/></a>     |
| [@thirdweb-dev/auth](./packages/auth/README.md)       | Best in class wallet authentication for Node backends                | <a href="https://www.npmjs.com/package/@thirdweb-dev/auth"><img src="https://img.shields.io/npm/v/@thirdweb-dev/auth?color=red&label=npm&logo=npm" alt="npm version"/></a>       |
| [@thirdweb-dev/storage](./packages/storage/README.md) | Best in class decentralized storage SDK for Browser and Node         | <a href="https://www.npmjs.com/package/@thirdweb-dev/storage"><img src="https://img.shields.io/npm/v/@thirdweb-dev/storage?color=red&label=npm&logo=npm" alt="npm version"/></a> |
| [thirdweb CLI](./packages/cli/README.md)              | Publish and deploy smart contracts without dealing with private keys | <a href="https://www.npmjs.com/package/thirdweb"><img src="https://img.shields.io/npm/v/thirdweb?color=red&label=npm&logo=npm" alt="npm version"/></a>                           |
| [@thirdweb-dev/solana](./packages/cli/README.md)      | Solana SDK for Browser, Node and React Native                        | <a href="https://www.npmjs.com/package/@thirdweb-dev/solana"><img src="https://img.shields.io/npm/v/@thirdweb-dev/solana?color=red&label=npm&logo=npm" alt="npm version"/></a>   |

## How this monorepo functions

### Contributing

1. Create PRs to the monorepo
2. Tag PRs with `[SDK]`, `[REACT]`, `[AUTH]`, etc to indicate the package that you are engaging with (TBD a better process for this / if it is necessary)
3. Create a `changeset` (with `yarn changeset`) for every **user impacting** change and describe what changed (try to focus on the end-user impact as much as possible -- use `major` for breaking changes, `minor` for new features, `patch` for non-breaking bug fixes, etc)
4. when the PR builds and tests pass merge to main

### Releases

#### Nightly

- every push to main automatically gets published to the `@nightly` tag as a snapshot version (based on the commit hash)
- nightly versions are published to npm under the `@nightly` tag

#### Stable

- every push to main that contains a changeset automatically gets added to the [Version Packages](https://github.com/thirdweb-dev/js/tree/changeset-release/main) PR
- to release a stable version of the code that is on main (with the change sets as the release notes / changelog) merge the `Version Packages` PR to main, this will automatically create new `@latest` packages for all of the packages in the monorepo that have changesets

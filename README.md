[![Super-Linter](https://github.com/actions/first-interaction/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/actions/first-interaction/actions/workflows/ci.yml/badge.svg)
[![Check dist/](https://github.com/actions/first-interaction/actions/workflows/check-dist.yml/badge.svg)](https://github.com/actions/first-interaction/actions/workflows/check-dist.yml)
[![CodeQL](https://github.com/actions/first-interaction/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/actions/first-interaction/actions/workflows/codeql-analysis.yml)

[![Lint Codebase](https://github.com/PichaiTK/first-interaction/actions/workflows/linter.yml/badge.svg)](https://github.com/PichaiTK/first-interaction/actions/workflows/linter.yml)

# First Interaction

[![Super-Linter](https://github.com/actions/first-interaction/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/actions/first-interaction/actions/workflows/ci.yml/badge.svg)
[![Check dist/](https://github.com/actions/first-interaction/actions/workflows/check-dist.yml/badge.svg)](https://github.com/actions/first-interaction/actions/workflows/check-dist.yml)
[![CodeQL](https://github.com/actions/first-interaction/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/actions/first-interaction/actions/workflows/codeql-analysis.yml)


An action for filtering pull requests (PRs) and issues from first-time
contributors.

## Breaking Changes in v3.0.0

Version 3.0.0 introduces breaking changes:

- If you're using a self-hosted runner, ensure it's on version
  [v2.327.1](https://github.com/actions/runner/releases/tag/v2.327.1) or later

When a first-time contributor opens a PR or issue, this action will add a
comment to the PR or issue with a message of your choice. This action is useful
for welcoming first-time contributors to your project and providing them with
information about how to contribute effectively.

## Usage

See [action.yml](action.yml)

```yaml
name: Greetings

on:
  pull_request:
    types:
      - opened
  issues:
    types:
      - opened

permissions:
  issues: write
  pull-requests: write

jobs:
  greeting:
    name: Greet First-Time Contributors
    runs-on: ubuntu-latest

    steps:
      - uses: actions/first-interaction@v3
        with:
          issue_message: |
            # Issue Message with Markdown

            This is the message that will be displayed!
          pr_message: |
            # PR Message with Markdown

            This is the message that will be displayed!
```


---------

<img width="1645" height="1645" alt="5968" src="https://github.com/user-attachments/assets/e5539152-6314-42e1-b695-b45cee8f2ae5" />

## Type.text

# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
* Focusing on what is best not just for us as individuals, but for the overall community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or advances of any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email address, without their explicit permission
* Contacting individual members, contributors, or leaders privately, outside designated community mechanisms, without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.

Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces. Examples of representing our community include using an official e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at opensource@github.com. All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series of actions.

**Consequence**: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of public interaction within the community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 2.0, available at <https://www.contributor-covenant.org/version/2/0/code_of_conduct.html>.

Community Impact Guidelines were inspired by [Mozilla's code of conduct enforcement ladder](https://github.com/mozilla/diversity).

[homepage]: https://www.contributor-covenant.org

For answers to common questions about this code of conduct, see the FAQ at <https://www.contributor-covenant.org/faq>. Translations are available at <https://www.contributor-covenant.org/translations>.
## PichaiTK/myapp-multiplatform,,,,  สร้าง GitHub repository 

## ✅ ตั้งค่า branch main, develop, feature/* 

## ✅ สร้าง Epic/Story ใน GitHub Issues พร้อม labels และ milestones 

## ✅ สร้าง template code (boilerplate) ให้พร้อมใช้งาน 

   ✅ ออกแบบ Database Schema 

## ✅ เขียน API Documentation

--------------

<!-- 2148AF7B-5FF8-4B28-A808-D692FEE2225A -->

## Authenticating to GitHub Packages

> \[!NOTE]
> GitHub Packages only supports authentication using a personal access token (classic). For more information, see [Managing your personal access tokens](/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

You need an access token to publish, install, and delete private, internal, and public packages.

You can use a personal access token (classic) to authenticate to GitHub Packages or the GitHub API. When you create a personal access token (classic), you can assign the token different scopes depending on your needs. For more information about packages-related scopes for a personal access token (classic), see [About permissions for GitHub Packages](/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries).

To authenticate to a GitHub Packages registry within a GitHub Actions workflow, you can use:

* `GITHUB_TOKEN` to publish packages associated with the workflow repository.
* A personal access token (classic) with at least `read:packages` scope to install packages associated with other private repositories (`GITHUB_TOKEN` can be used if the repository is granted read access to the package. See [Configuring a package's access control and visibility](/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)).

### Authenticating in a GitHub Actions workflow

This registry supports granular permissions. For registries that support granular permissions, if your GitHub Actions workflow is using a personal access token to authenticate to a registry, we highly recommend you update your workflow to use the `GITHUB_TOKEN`. For guidance on updating your workflows that authenticate to a registry with a personal access token, see [Publishing and installing a package with GitHub Actions](/en/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#upgrading-a-workflow-that-accesses-a-registry-using-a-personal-access-token).

> \[!NOTE]
> The ability for GitHub Actions workflows to delete and restore packages using the REST API is currently in public preview and subject to change.

You can use a `GITHUB_TOKEN` in a GitHub Actions workflow to delete or restore a package using the REST API, if the token has `admin` permission to the package. Repositories that publish packages using a workflow, and repositories that you have explicitly connected to packages, are automatically granted `admin` permission to packages in the repository.

For more information about the `GITHUB_TOKEN`, see [Use GITHUB\\\_TOKEN for authentication in workflows](/en/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow). For more information about the best practices when using a registry in actions, see [Secure use reference](/en/actions/security-guides/security-hardening-for-github-actions#considering-cross-repository-access).

Use the following command to authenticate to GitHub Packages in a GitHub Actions workflow using the `GITHUB_TOKEN` instead of hardcoding a personal access token in a nuget.config file in the repository:

```shell
dotnet nuget add source --username USERNAME --password ${{ secrets.GITHUB_TOKEN }} --store-password-in-clear-text --name github "https://nuget.pkg.github.com/NAMESPACE/index.json"
```

Replace `NAMESPACE` with the name of the personal account or organization to which your packages are scoped.

Replace `USERNAME` with the username to be used when connecting to an authenticated source.

You can also choose to give access permissions to packages independently for GitHub Codespaces and GitHub Actions. For more information, see [Configuring a package's access control and visibility](/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) and [Configuring a package's access control and visibility](/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).

### Authenticating with a personal access token

> \[!NOTE]
> GitHub Packages only supports authentication using a personal access token (classic). For more information, see [Managing your personal access tokens](/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

You need an access token to publish, install, and delete private, internal, and public packages.

You can use a personal access token (classic) to authenticate to GitHub Packages or the GitHub API. When you create a personal access token (classic), you can assign the token different scopes depending on your needs. For more information about packages-related scopes for a personal access token (classic), see [About permissions for GitHub Packages](/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries).

To authenticate to a GitHub Packages registry within a GitHub Actions workflow, you can use:

* `GITHUB_TOKEN` to publish packages associated with the workflow repository.
* A personal access token (classic) with at least `read:packages` scope to install packages associated with other private repositories (`GITHUB_TOKEN` can be used if the repository is granted read access to the package. See [Configuring a package's access control and visibility](/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)).

You must use a personal access token (classic) with the appropriate scopes to publish and install packages in GitHub Packages. For more information, see [Introduction to GitHub Packages](/en/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages).

To authenticate to GitHub Packages with the `dotnet` command-line interface (CLI), create a *nuget.config* file in your project directory specifying GitHub Packages as a source under `packageSources` for the `dotnet` CLI client.

You must replace:

* `USERNAME` with the name of your personal account on GitHub.
* `TOKEN` with your personal access token (classic).
* `NAMESPACE` with the name of the personal account or organization to which your packages are scoped.

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <packageSources>
        <clear />
        <add key="github" value="https://nuget.pkg.github.com/NAMESPACE/index.json" />
    </packageSources>
    <packageSourceCredentials>
        <github>
            <add key="Username" value="USERNAME" />
            <add key="ClearTextPassword" value="TOKEN" />
        </github>
    </packageSourceCredentials>
</configuration>
```

## Publishing a package

> \[!NOTE]
> The `nupkg` archive for a NuGet package version must be smaller than 2.147 GB in size.

You can publish a package to GitHub Packages by authenticating with a *nuget.config* file, using the `--api-key` command line option with your GitHub personal access token (classic) or by using command that can be run directly from the command line using the `dotnet` command-line interface (CLI).

Replace `OWNER` with your username or company name, and `YOUR_GITHUB_PAT` with your personal access token.

```shell
dotnet nuget add source --username OWNER --password YOUR_GITHUB_PAT --store-password-in-clear-text --name github "https://nuget.pkg.github.com/OWNER/index.json"
```

The NuGet registry stores packages within your organization or personal account, and allows you to associate packages with a repository. You can choose whether to inherit permissions from a repository, or set granular permissions independently of a repository.

When you first publish a package, the default visibility is private. To change the visibility or set access permissions, see [Configuring a package's access control and visibility](/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility). For more information on linking a published package with a repository, see [Connecting a repository to a package](/en/packages/learn-github-packages/connecting-a-repository-to-a-package).

If you specify a `RepositoryURL` in your project's *.csproj* file, the published package will automatically be connected to the specified repository. For more information, see [Working with the NuGet registry](/en/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry#publishing-a-package-using-a-nugetconfig-file). For information on linking an already-published package to a repository, see [Connecting a repository to a package](/en/packages/learn-github-packages/connecting-a-repository-to-a-package).

### Publishing a package using a GitHub personal access token as your API key

If you don't already have a personal access token to use for your account on GitHub, see [Managing your personal access tokens](/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

1. Create a new project. Replace `PROJECT_NAME` with the name you'd like to give the project.

   ```shell
   dotnet new console --name PROJECT_NAME
   ```

2. Package the project.

   ```shell
   dotnet pack --configuration Release
   ```

3. Publish the package using your personal access token as the API key. Replace `PROJECT_NAME` with the name of the project, `1.0.0` with the version number of the package, and `YOUR_GITHUB_PAT` with your personal access token.

   ```shell
   dotnet nuget push "bin/Release/PROJECT_NAME.1.0.0.nupkg" --api-key YOUR_GITHUB_PAT --source "github"
   ```

After you publish a package, you can view the package on GitHub. For more information, see [Viewing packages](/en/packages/learn-github-packages/viewing-packages).

### Publishing a package using a *nuget.config* file

When publishing, if you are linking your package to a repository, the `OWNER` of the repository specified in your *.csproj* file must match the `NAMESPACE` that you use in your *nuget.config* authentication file. Specify or increment the version number in your *.csproj* file, then use the `dotnet pack` command to create a *.nuspec* file for that version. For more information on creating your package, see [Create and publish a package](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli) in the Microsoft documentation.

> \[!NOTE]
> If you publish a package that is linked to a repository, the package automatically inherits the access permissions of the linked repository, and GitHub Actions workflows in the linked repository automatically get access to the package, unless your organization has disabled automatic inheritance of access permissions. For more information, see [Configuring a package's access control and visibility](/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#about-inheritance-of-access-permissions).

1. Authenticate to GitHub Packages. For more information, see [Authenticating to GitHub Packages](#authenticating-to-github-packages).

2. Create a new project. Replace `PROJECT_NAME` with the name you'd like to give the project.

   ```shell
   dotnet new console --name PROJECT_NAME
   ```

3. Add your project's specific information to your project's file, which ends in *.csproj*. Make sure to replace:

   * `1.0.0` with the version number of the package.
   * `OWNER` with the name of the personal account or organization that owns the repository to which you want to link your package.
   * `REPOSITORY` with the name of the repository to which you want to connect your package.

   ```xml
   <Project Sdk="Microsoft.NET.Sdk">

     <PropertyGroup>
       <OutputType>Exe</OutputType>
       <TargetFramework>netcoreapp3.0</TargetFramework>
       <PackageId>PROJECT_NAME</PackageId>
       <Version>1.0.0</Version>
       <Authors>AUTHORS</Authors>
       <Company>COMPANY_NAME</Company>
       <PackageDescription>PACKAGE_DESCRIPTION</PackageDescription>
       <RepositoryUrl>https://github.com/OWNER/REPOSITORY</RepositoryUrl>
     </PropertyGroup>

   </Project>
   ```

4. Package the project.

   ```shell
   dotnet pack --configuration Release
   ```

5. Publish the package using the `key` you specified in the *nuget.config* file. Replace `PROJECT_NAME` with the name of the project, and replace `1.0.0` with the version number of the package.

   ```shell
   dotnet nuget push "bin/Release/PROJECT_NAME.1.0.0.nupkg" --source "github"
   ```

After you publish a package, you can view the package on GitHub. For more information, see [Viewing packages](/en/packages/learn-github-packages/viewing-packages).

## Publishing multiple packages to the same repository

To connect multiple packages to the same repository, use the same GitHub repository URL in the `RepositoryURL` fields in all *.csproj* project files. GitHub matches the repository based on that field.

The following example publishes the projects MY\_APP and MY\_OTHER\_APP to the same repository:

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.0</TargetFramework>
    <PackageId>MY_APP</PackageId>
    <Version>1.0.0</Version>
    <Authors>Octocat</Authors>
    <Company>GitHub</Company>
    <PackageDescription>This package adds a singing Octocat!</PackageDescription>
    <RepositoryUrl>https://github.com/my-org/my-repo</RepositoryUrl>
  </PropertyGroup>

</Project>
```

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.0</TargetFramework>
    <PackageId>MY_OTHER_APP</PackageId>
    <Version>1.0.0</Version>
    <Authors>Octocat</Authors>
    <Company>GitHub</Company>
    <PackageDescription>This package adds a dancing Octocat!</PackageDescription>
    <RepositoryUrl>https://github.com/my-org/my-repo</RepositoryUrl>
  </PropertyGroup>

</Project>
```

## Installing a package

Using packages from GitHub in your project is similar to using packages from *nuget.org*. Add your package dependencies to your *.csproj* file, specifying the package name and version. For more information on using a *.csproj* file in your project, see [Working with NuGet packages](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow) in the Microsoft documentation.

1. Authenticate to GitHub Packages. For more information, see [Authenticating to GitHub Packages](#authenticating-to-github-packages).

2. To use a package, add `ItemGroup` and configure the `PackageReference` field in the *.csproj* project file. Replace the `PACKAGE_NAME` value in `Include="PACKAGE_NAME"` with your package dependency, and replace the `X.X.X` value in `Version="X.X.X"` with the version of the package you want to use:

   ```xml
   <Project Sdk="Microsoft.NET.Sdk">

     <PropertyGroup>
       <OutputType>Exe</OutputType>
       <TargetFramework>netcoreapp3.0</TargetFramework>
       <PackageId>My-app</PackageId>
       <Version>1.0.0</Version>
      <Authors>Octocat</Authors>
       <Company>GitHub</Company>
      <PackageDescription>This package adds an Octocat!</PackageDescription>
       <RepositoryUrl>https://github.com/OWNER/REPOSITORY</RepositoryUrl>
     </PropertyGroup>

     <ItemGroup>
       <PackageReference Include="PACKAGE_NAME" Version="X.X.X" />
     </ItemGroup>

   </Project>
   ```

3. Install the packages with the `restore` command.

   ```shell
   dotnet restore
   ```

## Troubleshooting

If you're using a `GITHUB_TOKEN` to authenticate to a GitHub Packages registry within a GitHub Actions workflow, the token cannot access private repository-based packages in a different repository other than where the workflow is running in. To access packages associated with other repositories, instead generate a personal access token (classic) with the `read:packages` scope and pass this token in as a secret.

## Further reading

* [Deleting and restoring a package](/en/packages/learn-github-packages/deleting-and-restoring-a-package)

Pull requests are proposals to merge code changes into a project. A pull request is GitHub's foundational **collaboration feature**, letting you discuss and review changes before merging them. This helps teams work together, catch issues early, and maintain code quality.

<a href="https://github.com/pulls?ref_product=github&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>View your pull requests</span> <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link-external" aria-label="link external icon" role="img"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path></svg></a>

## Working with pull requests

The **Conversation** tab of a pull request displays a description of the changes, a timeline of events, and comments and reviews from collaborators. This central hub lets you track the discussion and progress of the proposed changes.

The **Commits** tab shows all commits made to the pull request branch in chronological order. This helps you understand the development history and see how the changes evolved over time.

The **Checks** tab displays the status of any automated tests, builds, or other continuous integration workflows that run when you push commits. These checks help ensure your changes meet quality standards before merging.

The **Files changed** tab shows the differences between the proposed changes and the existing code, making it easy to see what will change when the pull request merges.

## Draft pull requests

When you create a pull request, you can choose to make it a draft pull request. Draft pull requests cannot be merged, and code owners are not automatically requested to review them. This is useful when you want to share work-in-progress without formally requesting reviews.

When you're ready to get feedback on your pull request, you can mark your draft pull request as ready for review. Marking a pull request as ready for review will request reviews from any code owners. You can convert a pull request to a draft at any time. See [Changing the stage of a pull request](/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request).

## Differences between commits on compare and pull request pages

The compare and pull request pages use different methods to calculate the diff for changed files:

* Compare pages show the diff between the tip of the head ref and the current common ancestor (that is, the merge base) of the head and base ref.
* Pull request pages show the diff between the tip of the head ref and the common ancestor of the head and base ref at the time when the pull request was created. As a result, the merge base used for the comparison might be different.

## Further reading

* [Creating a pull request](/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
* [About branches](/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
* [Commenting on a pull request](/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)

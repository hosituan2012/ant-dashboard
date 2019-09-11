# Using help

> Project source code https://github.com/repertory/ng-antd-admin

## Scaffold

Using scaffolding makes it easier to initialize projects, generate template code, and save development time.

**Generate page command**

```bash
ng g .:page --name=NAME [options]
```

For example, the following code can quickly generate a full page.

```bash
ng g .:page --name=page/name --children
```

**Generate page parameters**

--name

Component name (required)

--styleext

Style file extension (default less)
--path

Specify the component creation directory (equivalent to the directory where the execution is located)
--spec

Whether to generate a .spec test file

--children

Whether to generate sub-routes (default false)

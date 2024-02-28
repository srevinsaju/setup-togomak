# `setup-togomak` ![](https://github.com/srevinsaju/setup-togomak/workflows/Tests/badge.svg)

## About

This GitHub Action installs `togomak` into `$PATH`. For more information, refer to [togomak](https://togomak.srev.in)'s documentation.

## Usage

Setup the `gh` CLI:

```yaml
steps:
- uses: srevinsaju/setup-togomak@v1
```

A specific version of the `togomak` CLI can be installed:

```yaml
steps:
- uses: srevinsaju/setup-togomak@v1
  with:
    version: 2.0.0-alpha.15
```

## Inputs
The actions supports the following inputs:

- `version`: The version of `togomak` to install, defaulting to `2.0.0-alpha.15`

## License
[MIT](LICENSE).

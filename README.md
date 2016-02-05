# Tox


## Dependencies
| **Name** | **Version** |
|----------|-------------|
| libsodium | 1.0.8 | >=1.0.4 |

# Building
Fairly simple. You'll need [Rust](http://www.rust-lang.org/) and libsodium.

When you'll have deps, build debug version with
```bash
cargo build
```

To run tests:
```bash
cargo test

```
To build docs:
```bash
cargo doc
```
They will be located under `target/doc/`

# License

Licensed under GPLv3+. For details, see [COPYING](/COPYING).
# Bug report for @headlessui/react

When upgrading from v1.6.2 to v1.6.3, the `RadioGroup` component's behavior breaks.

When navigating with a keyboard, the `active` state remains active even after focus has
moved to the next `RadioGroup.Option`.

You can see it in this repo by switching between the v1.6.2 branch and the v1.6.3 branch.

```sh
git clone https://github.com/TommasoAmici/headlessui-radiogroup-focus-bug
cd headlessui-radiogroup-focus-bug
git checkout v1.6.2 && yarn && yarn dev
# remember to run yarn again to update @headlessui/react
git checkout v1.6.3 && yarn && yarn dev
```

# [Neovim](https://neovim.io)

> Hyperextensible Vim-based text editor

---

## Plugin Manager

There are many plug-in managers for Vim, and Vim also includes it's own plug-in
manager, which can be used. However, I recommend using one of these three. They
are well established, and provide all of the utility the average user will need.
The alternatives may be better in specific cases, but for the general user I
would recommend to pick one of these three.

### [Vim-Plug](https://github.com/junegunn/vim-plug) (18.7k)

> :hibiscus: Minimalist Vim Plugin Manager

I prefer to use vim-plug, it is very simple to use, and I have not had any
issues with it. So if possible use vim-plug. The syntax is very easy to use, it
utilizes lazy loading when desired, and automatically manages plugins though
git or other sources.

I find that Vim-Plug is relatively easy to use, and supports most necessary
utilities that I want with a plug-in manager, specifically post update commands,
and asynchronous execution.

#### Install

```shell
curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

#### Usage

```vim
call plug#begin('~/.config/nvim/Plugged')
  Plug 'sheerun/vim-polyglot' " Load plugin from github repo.
call plug#end()
```

### [Pathogen](https://github.com/tpope/vim-pathogen) (11.3k)

> pathogen.vim: manage your runtime path http://www.vim.org/scripts/script.php?script_id=2332

I have never used pathogen.vim, but it is made by tpope, so I imagine that it
must be relatively good. However, it is old school, and not nearly has easy to
use as some of the alternatives. All plugins, must be manually maintained, such
that all plugins are just in a folder called `~/.vim/bundle`, and any plugins
in this folder will be loaded.

::: tip NOTE
Avoid this in preference of managers that will updated and lazy load different
plugins.
:::

::: warning
This is a warning
:::

::: danger ERROR
This is an error
:::

#### Install

```shell
mkdir -p ~/.vim/autoload ~/.vim/bundle && \
curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim
```

#### Usage

Add plugins into `~/.vim/bundle`, and then they will automatically be loaded.

```vim
execute pathogen#infect()
```

### [Vundle](https://github.com/VundleVim/Vundle.vim) (21.2K)

> Vundle, the plug-in manager for Vim http://github.com/VundleVim/Vundle.Vim

I have not used Vundle, yet, but it seems relatively good. In general the syntax
appears to be almost identical to Vim-Plug, and its feature set also seems to be
about the same. However, it does have more stars, so it may be something to
consider in the future.

#### Install

```shell
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

#### Usage

```vim
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
  Plugin 'sheerun/vim-polyglot' " Load plugin from github repo.
call vundle#end()
```

---

## Plugins

There are thousands of plugins that can be used with Neovim, but as Vim is a
very old editor, many of the plugins have started to age, and new ones are
constantly being developed. So here is the list of plugins that I use, and what
they are used for.

### Defaults

#### [vim-kitty-navigator](https://github.com/knubie/vim-kitty-navigator)

> Seamless navigation between kitty panes and vim splits

When using the Kitty terminal, this plug-in allows easy navigation between Vim
splits and kitty windows, all by using the same key bindings. If you are using
the kitty terminal, I find this to be a must have, it has greatly improved my
work flow.

```vim
Plug 'knubie/vim-kitty-navigator'  " Seamless navigation between kitty panes and vim splits
```

#### [vim-lastplace](https://github.com/farmergreg/vim-lastplace)

> Intelligently reopen files at your last edit position in Vim. https://www.gregd.org/

This plugins just set the cursor to the last place it was in the file, when the
file was last opened. This plug-in can roughly be done with a simple Vim script,
but this plug-in has some special tools, such that it expands any folds, so that
the cursor is visible, and it ignores the last place on temporary files, such as
version control messages.

```vim
Plug 'farmergreg/vim-lastplace'  " Intelligently reopen files at your last edit position in Vim
```

## Downloads

I would recommend against using my configuration, but it is available here if
you want to use it for reference.

[Download Neovim `init.vim`](/assets/laptop.init.vim)


# My Flux Panel - 高性能、多功能的转发面板

![项目Logo](https://z1.ax1x.com/2023/11/22/piC026e.png) **My Flux Panel** 是一个基于业界领先的GO语言安全隧道工具 [gost](https://gost.run/) (v2和v3) 打造的现代化、功能强大的网络转发管理面板。我们致力于为用户提供一个直观、高效且稳定的流量转发解决方案，无论您是开发者、网络工程师还是希望简化网络管理的用户，My Flux Panel都将是您的得力助手。

[![Go Version](https://img.shields.io/github/go-mod/go-version/amo0114/my-flux-panel)](https://golang.org/)
[![Release](https://img.shields.io/github/v/release/amo0114/my-flux-panel)](https://github.com/amo0114/my-flux-panel/releases)
[![License](https://img.shields.io/github/license/amo0114/my-flux-panel)](https://github.com/amo0114/my-flux-panel/blob/main/LICENSE)
[![Go Report Card](https://goreportcard.com/badge/github.com/amo0114/my-flux-panel)](https://goreportcard.com/report/github.com/amo0114/my-flux-panel)

---
## ⚠️ 免责声明 (Disclaimer)

本项目仅供学习和技术研究使用，旨在提供一个方便的工具来管理和配置`gost`服务。

任何用户在使用本项目时，应遵守其所在国家或地区的法律法规。**严禁用于任何非法目的**，包括但不限于从事网络攻击、侵犯版权、传播非法信息等行为。

本项目作者不对任何用户因使用或滥用本项目而导致的任何直接或间接的法律责任、损失或损害**承担任何责任**。所有由用户行为产生的后果均由用户自行承担。

本项目按“原样”提供，不提供任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。

**下载、安装或使用本项目的任何部分，即表示您已阅读、理解并同意本免责声明的所有条款。**

## ✨ 项目特性

* **全面的 `gost` 支持**: 深度集成 `gost` v2 和 v3 核心功能，允许您通过UI轻松配置和管理复杂的转发规则和代理链。
* **直观的Web用户界面**: 采用现代化的前端技术栈，提供了一个美观、响应迅速且用户友好的Web面板，让您告别繁琐的命令行操作。
* **节点管理**: 轻松添加、删除和管理您的`gost`节点，实时监控节点状态和流量使用情况。
* **用户和权限系统**: 支持多用户管理，您可以为不同的用户分配不同的节点和权限，实现资源隔离。
* **规则模板化**: 创建和保存常用的转发规则模板，一键部署到多个节点，极大提升配置效率。
* **流量统计与监控**: 提供清晰的流量统计图表，让您对每个节点、每个用户的流量消耗一目了然。
* **轻量级与高性能**: 后端采用Go语言编写，保证了服务的高性能和低资源占用。
* **易于部署**: 支持Docker和二进制文件等多种部署方式，让您在几分钟内即可搭建完成。

## 🛠️ 技术栈

本项目采用了业界主流和成熟的技术栈，以确保其稳定性、性能和可扩展性。

* **后端**:
    * **Go**: 主要编程语言，以其高并发、高性能的特性作为项目基石。
    * **Gin**: 用于构建高性能 Web API 的框架。
    * **GORM**: 功能强大的 Go ORM 库，用于与数据库进行交互。
    * **SQLite / MySQL / PostgreSQL**: 提供灵活的数据存储选择，默认使用SQLite，方便快速启动。
* **前端**:
    * **Vue.js 3**: 用于构建用户界面的现代化 JavaScript 框架。
    * **Vite**: 提供极致开发体验和打包优化的前端构建工具。
    * **Element Plus**: 高质量的 Vue 3 UI 组件库。
    * **ECharts**: 用于数据可视化的强大图表库。
* **核心依赖**:
    * **gost (v2 & v3)**: 项目的核心，负责底层的网络转发功能。

## 🚀 快速开始

我们提供了多种部署方式，您可以根据自己的环境选择最适合的一种。

### 1. 使用 Docker (推荐)

这是最简单、最推荐的部署方式。

**前提条件**:
* 已安装 [Docker](https://www.docker.com/) 和 [Docker Compose](https://docs.docker.com/compose/)。

**部署步骤**:

```bash
# 1. 克隆本项目
git clone [https://github.com/amo0114/my-flux-panel.git](https://github.com/amo0114/my-flux-panel.git)
cd my-flux-panel

# 2. 修改配置文件
# 根据您的需求，复制并编辑 docker-compose.yml 文件旁的 .env.example 文件为 .env
cp .env.example .env
nano .env # 按需修改其中的配置项

# 3. 启动服务
docker-compose up -d
```

服务启动后，您可以通过 `http://<您的服务器IP>:<端口>` 访问Web面板。默认端口通常为 `8080`。

### 2. 二进制文件部署

我们为所有主流的操作系统和架构都提供了预编译的二进制文件。

**步骤**:

1.  前往 [Releases](https://github.com/amo0114/my-flux-panel/releases) 页面下载最新版本的压缩包。
2.  解压压缩包到任意目录，例如 `/opt/my-flux-panel`。
3.  编辑同目录下的 `config.yaml` 文件，配置数据库连接、端口等信息。
4.  赋予执行权限并启动程序：
    ```bash
    chmod +x my-flux-panel
    ./my-flux-panel
    ```
5.  为了方便管理，建议使用 `systemd` 或 `supervisor` 将其作为后台服务运行。

## 📖 使用指南

*(建议在此处添加几张面板的核心功能截图)*

1.  **登录**: 首次登录的默认管理员账号和密码是 `admin` / `admin`。登录后请立即修改密码。
2.  **添加节点**: 在“节点管理”页面，点击“新增节点”，填入节点的地址、认证信息等。
3.  **创建转发规则**: 在“规则管理”页面，选择一个或多个节点，配置您的转发链和服务。
4.  **管理用户**: 在“用户管理”中，可以创建新用户并为他们分配可用的节点和流量。

更详细的文档，请参阅我们的 [Wiki](https://github.com/amo0114/my-flux-panel/wiki)。

## 🤝 如何贡献

我们非常欢迎社区的贡献！如果您有任何好的想法或建议，请随时通过以下方式参与：

* 提交 [Issues](https://github.com/amo0114/my-flux-panel/issues) 来报告Bug或提出功能请求。
* Fork本项目，创建您的功能分支，然后通过 [Pull Requests](https://github.com/amo0114/my-flux-panel/pulls) 为项目贡献代码。

我们期待您的参与！

## 📄 开源许可

本项目基于 [MIT License](https://github.com/amo0114/my-flux-panel/blob/main/LICENSE) 开源。
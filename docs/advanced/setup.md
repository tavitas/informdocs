---
id: setup
title: Setup
sidebar_label: Setup
---

## Docker4Drupal

Both the [Data Portal](/docs/inform/tools#data-portals) and the [Indicator Reporting Tool](/docs/inform/tools#the-indicator-reporting-tool) are built on top of [Drupal](https://www.drupal.org). We have utilized the [docker4drupal](https://github.com/wodby/docker4drupal) project and [docker](https://www.docker.com) containerization platform to build these applications. The containers are managed and deployed using the [wodby](https://www.wodby.com) service to Amazon Web Services (AWS).

Below is the application stack that we have used:

**Operating System**: Ubuntu 16.04 LTS

| Container   | Versions               | Service name | Image              | Default |
| ----------- | ---------------------- | ------------ | ------------------ | ------- |
| [Nginx]     | 1.17, 1.16             | `nginx`      | [wodby/nginx]      | ✓       |
| [Drupal]    | 8, 7                   | `php`        | [wodby/drupal]     | ✓       |
| [PHP]       | 7.4, 7.3, 7.2          | `php`        | [wodby/drupal-php] |         |
| [MariaDB]   | 10.4, 10.3, 10.2, 10.1 | `mariadb`    | [wodby/mariadb]    | ✓       |
| [Varnish]   | 6.0, 4.1               | `varnish`    | [wodby/varnish]    |         |
| [Solr]      | 8, 7, 6, 5             | `solr`       | [wodby/solr]       |         |
| [OpenSMTPD] | 6.0                    | `opensmtpd`  | [wodby/opensmtpd]  |         |
| [Mailhog]   | latest                 | `mailhog`    | [mailhog/mailhog]  | ✓       |
| Traefik     | latest                 | `traefik`    | [_/traefik]        | ✓       |

[drupal]: https://wodby.com/docs/stacks/drupal/containers#php
[mailhog]: https://wodby.com/docs/stacks/drupal/containers#mailhog
[mariadb]: https://wodby.com/docs/stacks/drupal/containers#mariadb
[memcached]: https://wodby.com/docs/stacks/drupal/containers#memcached
[nginx]: https://wodby.com/docs/stacks/drupal/containers#nginx
[node.js]: https://wodby.com/docs/stacks/drupal/containers#nodejs
[opensmtpd]: https://wodby.com/docs/stacks/drupal/containers#opensmtpd
[php]: https://wodby.com/docs/stacks/drupal/containers#php
[solr]: https://wodby.com/docs/stacks/drupal/containers#solr
[varnish]: https://wodby.com/docs/stacks/drupal/containers#varnish
[_/traefik]: https://hub.docker.com/_/traefik
[mailhog/mailhog]: https://hub.docker.com/r/mailhog/mailhog
[wodby/drupal-php]: https://github.com/wodby/drupal-php
[wodby/drupal]: https://github.com/wodby/drupal
[wodby/nginx]: https://github.com/wodby/nginx
[wodby/node]: https://github.com/wodby/node
[wodby/opensmtpd]: https://github.com/wodby/opensmtpd
[wodby/solr]: https://github.com/wodby/solr
[wodby/varnish]: https://github.com/wodby/varnish
[wodby/mariadb]: https://github.com/wodby/mariadb

## Wodby

https://github.com/wodby/about#wodby

_"Wodby is an applications management platform. We help developers deploy and manage their applications across any cloud. Wodby is not a hosting provider, we do not sell compute powers, instead you bring your own server/cluster from any cloud provider you want. We deploy, maintain infrastructure and stacks on your own server(s)._

_The infrastructure we provide is strictly container-based and runs on Kubernetes and Docker. Our mission is to simplify the life of developers by automating most common tasks for infrastructure management and stacks maintenance._

## Amazon Web Services (AWS)

https://https://aws.amazon.com/

All application instances developed by the Inform project are deployed on servers in Sydney and Tokyo on the Amazon Web Services platform.

_"Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 175 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster."_

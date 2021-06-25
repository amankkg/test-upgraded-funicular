# Instructions

## Pre-requisites

1. Node.js 14
2. yarn
3. Grafana 7 (or docker and appropriate Grafana image)

## Commands

1. Run `yarn` command to install dependencies
2. Run `npm run build` to build the plugin
3. Launch Grafana and set up plugins path to the parent directory, e.g.  
   `docker run -d -p 3000:3000 -v "$(YOUR_PROJECT_PARENT_DIRECTORY)":/var/lib/grafana/plugins --name=grafana grafana/grafana:7.0.0`

Now you can visit `http://localhost:3000` (username: `admin`, password: `admin`) and add a new panel plugin to the dashboard. There are temporarily hardcoded API key and test request but no gifs will be displayed anyway. This is due to browser's 3rd party cookie restrictions, one can check them out in browser's devtools.

# Grafana Panel Plugin Template

[![Build](https://github.com/grafana/grafana-starter-panel/workflows/CI/badge.svg)](https://github.com/grafana/grafana-starter-panel/actions?query=workflow%3A%22CI%22)

This template is a starting point for building Grafana Panel Plugins in Grafana 7.0+

## What is Grafana Panel Plugin?

Panels are the building blocks of Grafana. They allow you to visualize data in different ways. While Grafana has several types of panels already built-in, you can also build your own panel, to add support for other visualizations.

For more information about panels, refer to the documentation on [Panels](https://grafana.com/docs/grafana/latest/features/panels/panels/)

## Getting started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Build plugin in development mode or run in watch mode

   ```bash
   yarn dev
   ```

   or

   ```bash
   yarn watch
   ```

3. Build plugin in production mode

   ```bash
   yarn build
   ```

## Learn more

- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System

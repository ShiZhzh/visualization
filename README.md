# Premier League Data Visualization

> 山东大学计算机科学与技术学院《可视化技术》课程项目
> An interactive data visualization project for exploring the English Premier League.

本项目以 **英格兰足球超级联赛（Premier League）** 为主题，通过地图、雷达图、饼图、柱状图、排名变化图等多种可视化形式，对英超球队的地理分布、赛季表现、比赛结果、历史排名以及经典德比进行交互式展示。

项目主要基于 **D3.js、Apache ECharts、HTML/CSS/JavaScript** 实现，并使用 Python 进行部分数据预处理及本地 Web 服务部署。

---

## ✨ Features

### 🗺️ Premier League Map

通过交互式地图展示英超俱乐部及球场的空间分布，帮助用户从地理视角了解英格兰足球俱乐部。

支持进一步访问不同地区及球队的详细信息页面。

### 📊 Team Performance Radar Chart

基于 2021–2022 赛季数据，从多个维度对球队表现进行可视化分析，包括：

* 场均进球
* 场均射正
* 场均角球
* 防守表现
* 零封率
* 胜率

支持：

* 单支球队查看
* 两支球队对比
* 数据明细展示

### ⚽ Match Results Analysis

通过 D3.js 对赛季比赛结果进行统计分析，包括：

* 主胜 / 平局 / 客胜比例
* 各球队赛季总进球数
* 球队进球数据排序
* 鼠标悬停交互查看详细信息

### 📈 Historical Ranking

展示英超主要俱乐部在 **2000–2022** 年间的赛季最终排名变化，用于观察不同球队长期竞技表现和联赛格局变化。

### 🔥 Derby Stories

提供经典英超德比专题页面，包括：

* 北伦敦德比
* 曼市德比
* 双红会

结合图片及专题页面展示英超代表性足球文化。

---

## 🛠️ Tech Stack

| Category        | Technology                |
| --------------- | ------------------------- |
| Frontend        | HTML5 / CSS3 / JavaScript |
| Visualization   | D3.js 7                   |
| Charts & Maps   | Apache ECharts 5          |
| Data Processing | Python / Pandas           |
| Local Server    | Flask                     |
| Data Format     | CSV / JSON                |

---

## 📁 Project Structure

```text
visualization/
│
├── main.html               # Main visualization page
├── styles.css              # Global styles
├── data.js                 # Processed frontend data
├── server.py               # Flask local web server
│
├── js/                     # Visualization scripts
│   ├── map.js              # Premier League map
│   ├── radar.js            # Team radar chart
│   ├── results.js          # Match result analysis
│   ├── rank.js             # Historical ranking visualization
│   └── derby.js            # Derby carousel / interaction
│
├── datasets/               # Historical Premier League datasets
│   ├── 2000-01.csv
│   ├── ...
│   ├── 2019-20.csv
│   ├── EPLStandings.csv
│   ├── final_dataset.csv
│   ├── Dataset-Explanation.txt
│   └── File_description.txt
│
├── statistics/             # Processed statistical data
│   ├── 2020-2021.csv
│   └── 2021-2022英超球队指标统计.json
│
├── team/                   # Club detail pages
│   ├── arsenal.html
│   ├── chelsea.html
│   ├── liverpool.html
│   ├── manchestercity.html
│   ├── manchesterunited.html
│   └── tottenhamhotspur.html
│
├── area/                   # Regional club pages
│   ├── London.html
│   ├── NorthWest.html
│   ├── NorthEast.html
│   └── ...
│
├── Derby/                  # Derby-specific pages
│
├── image/                  # Images and static resources
│
├── data_work.py            # Data preprocessing / metric calculation
├── strength.py             # Auxiliary data-processing script
├── stadiums.csv            # Stadium information
└── gb.json                 # Geographic data
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ShiZhzh/visualization.git
cd visualization
```

### 2. Install Flask

The visualization itself runs in the browser. Flask is used to provide a lightweight local HTTP server.

```bash
pip install flask
```

If you also need to execute the data-processing scripts:

```bash
pip install pandas
```

### 3. Start the server

```bash
python server.py
```

The application will be available at:

```text
http://127.0.0.1:5000
```

Open the address in your browser to explore the visualization.

---

## 💡 Why Use a Local Server?

Although most components are implemented with static HTML, CSS and JavaScript, some visualizations load local CSV / JSON resources dynamically.

Modern browsers may restrict local file access when opening `main.html` directly with the `file://` protocol.

Therefore, using the provided Flask server is recommended:

```bash
python server.py
```

instead of directly double-clicking `main.html`.

---

## 📦 Data

The repository contains historical Premier League match and standings data covering multiple seasons, together with processed data used by the visualizations.

Dataset-related files can be found under:

```text
datasets/
statistics/
```

For descriptions of individual dataset fields, refer to:

```text
datasets/Dataset-Explanation.txt
datasets/File_description.txt
```

Some visualization-ready statistics are generated or processed using the Python scripts included in the repository.

---

## 🖱️ Interaction

The project contains multiple interactive visualization components.

Users can:

* Hover over charts to inspect detailed values
* Select different Premier League clubs
* Compare two teams using radar charts
* Change the ordering of statistical charts
* Explore clubs according to geographic location
* Navigate to individual club pages
* Explore different Premier League derby stories

The goal is not only to present football statistics, but also to provide an intuitive way to **explore relationships, compare teams and discover patterns in Premier League data**.

---

## 🌐 External Dependencies

The main page loads visualization libraries through CDN:

* Apache ECharts
* D3.js

Therefore, an Internet connection may be required when loading the application for the first time.

---

## 🎓 Course Information

This repository was developed as the experimental project for:

**Visualization Technology / 可视化技术**

School of Computer Science and Technology
Shandong University

The project focuses on applying data visualization techniques to a real-world dataset and combines:

* Geographic visualization
* Multidimensional data visualization
* Statistical visualization
* Time-series / ranking visualization
* Interactive visual analytics

---

## 🤝 Contributing

Suggestions and improvements are welcome.

If you find a bug or would like to improve the visualization, you can:

1. Fork this repository
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---

## 📌 Repository

**GitHub:** [ShiZhzh/visualization](https://github.com/ShiZhzh/visualization)

---

<p align="center">
  <b>Explore the Premier League through data and visualization.</b>
</p>

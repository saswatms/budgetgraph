# BudgetGraph

This is a simple React.js website that allows users to input data for a project, including the project name, amount, and date. The website then uses the [Regraph.js](https://regraph.js.org/) library to plot a chart based on the provided data.

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

- Node.js and pnpm (Node Package Manager) should be installed on your system.

### Installation

1. Clone this repository to your local machine using:

```bash
git clone https://github.com/saswatms/budgetgraph.git
```

2. Change into the project directory:

```bash
cd budgetgraph
```

3. Install the required pnpm packages:

```bash
pnpm install
```

### Running the Application

To run the application, use the following command:

```bash
pnpm start
```

This will start the development server, and the website will be accessible at `http://localhost:3000`.

## How to Use

1. On the website's homepage, you'll see a form where you can input data for your project.

2. Enter the following information:

   - Project Name: The name of your project.
   - Amount: The amount related to your project.
   - Date: The date when the project was initiated or completed.

3. Click the "Add Data" button to add the data to the chart.

4. The chart will be updated automatically to include the new data point.

5. Go to chart tab to see the graph.

## Dependencies

This project uses the following main dependencies:

- React.js: A JavaScript library for building user interfaces.
- Regraph.js: A charting library that helps visualize data.

The necessary dependencies are listed in the `package.json` file.

## Contributions

Contributions to this project are welcome. If you find any issues or want to enhance the website, feel free to submit a pull request.

## Acknowledgments

- This project was inspired by the desire to integrate React.js and Regraph.js to visualize data effectively.

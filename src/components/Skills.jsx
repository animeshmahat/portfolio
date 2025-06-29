import { Radar } from "react-chartjs-2";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { skills } from "../assets/skillsData";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Skills() {
  const data = {
    labels: skills.map((s) => s.name),
    datasets: [
      {
        label: "Proficiency",
        data: skills.map((s) => s.proficiency),
        backgroundColor: "rgba(245, 158, 11, 0.2)",
        borderColor: "rgba(245, 158, 11, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(245, 158, 11, 1)",
        pointBorderColor: "#fff",
        pointHoverRadius: 6,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 1,
        ticks: { stepSize: 0.2, display: false },
        grid: { color: "#99999930" },
        angleLines: { color: "#99999930" },
        pointLabels: {
          font: { size: 14, weight: "bold" },
          color: "#f59e0b",
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.chart.data.labels[context.dataIndex];
            const value = context.formattedValue;
            return `${label}: ${value * 100}%`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <section
      id="Skills"
      className="w-full px-4 py-24 bg-gray-50 dark:bg-gray-950 text-black dark:text-white transition-colors duration-500"
    >
      <h2 className="text-center text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
        <span className="text-amber-500">My&nbsp;</span>
        <span className="text-black dark:text-white">Skills</span>
      </h2>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto items-center justify-center"
      >
        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-[400px] md:h-[500px] relative"
        >
          <Radar data={data} options={options} />
        </motion.div>

        {/* Skills Icons */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-center gap-5 px-4">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 bg-amber-100 dark:bg-zinc-800 px-4 py-2 rounded-full shadow text-sm hover:scale-105 transition-transform"
              >
                <Icon className="text-amber-500 text-lg" />
                <span className="text-black dark:text-white">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      boxShadow: {
        raffle: "0px 0px 11px 3px rgba(0, 0, 0, 0.06)",
      },
    },
  },
};

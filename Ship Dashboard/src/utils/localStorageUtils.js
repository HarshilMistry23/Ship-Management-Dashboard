export const seedMockData = () => {
  if (!localStorage.getItem("users")) {
    const mockData = {
      users: [
        { id: "1", role: "Admin", email: "admin@entnt.in", password: "admin123" },
        { id: "2", role: "Inspector", email: "inspector@entnt.in", password: "inspect123" },
        { id: "3", role: "Engineer", email: "engineer@entnt.in", password: "engine123" }
      ],
      ships: [],
      components: [],
      jobs: []
    };
    Object.entries(mockData).forEach(([key, value]) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  }
};

async function main () {
  try {
    const cats = await $.get("/cats");

    // Appel en série
    for (const cat of cats) {
      if (cat.fed) {
        continue;
      }
      const food = await $.get(`/catfoods/${cat.age}`);
      await $.post(`/cats/${cat.id}`, { fed: food }));
    }

    // Appels en concurrence
    await Promise.all(cats.map(async cat => {
      if (cat.fed) {
        return;
      }
      const food = await $.get(`/catfoods/${cat.age}`);
      await $.post(`/cats/${cat.id}`, { fed: food }));
    }));

  } catch (err) {
    alert(err);
  }
}

async function toto () {
  return 42
}

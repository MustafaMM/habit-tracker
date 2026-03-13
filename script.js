    // ====================================================
    // DATA
    // Your habits will live here. Each habit is an object.
    // Suggested shape:
    // {
    //   id: number,
    //   name: string,
    //   completedToday: boolean,
    //   streak: number
    // }
    // ====================================================
    let habits = [];
    let nextId = 1;
    let streakCounter = 0;

    //Called when the user clicks "+ Add"
    function addHabit() {
      //Read the value from #habit-input
      let habit = document.getElementById("habit-input").value;
      //console.log(habit);
      //If it's empty, do nothing (or alert the user)
      if(habit === ""){
        return alert("Enter a habit!");
      }
      //Create a new habit object and push it to habits[]
      let habitObject = {
        id: nextId++,
        name: habit,
        completedToday: false,
        streak: streakCounter
      };

      habits.push(habitObject);
      //console.log(habits);

      //Clear the input field
      document.getElementById("habit-input").value = "";
      //console.log(habit);

      //Call render()
      render();
    }


    // ====================================================
    // toggleHabit(id)
    // Called when the user clicks the circle check button
    // TODO:
    //   1. Find the habit in habits[] with the matching id
    //   2. Flip its completedToday value (true → false, false → true)
    //   3. If completing it, increment its streak
    //   4. If un-completing it, decrement its streak (min 0)
    //   5. Call render()
    // ====================================================
    function toggleHabit(id) {
      // your code here
    }


    // ====================================================
    // deleteHabit(id)
    // Called when the user clicks the × button
    // TODO:
    //   1. Remove the habit with the matching id from habits[]
    //      Hint: look up the .filter() iterator method
    //   2. Call render()
    // ====================================================
    function deleteHabit(id) {
      // your code here
    }


    // ====================================================
    // resetDay()
    // Called when the user clicks "↺ Reset Today"
    // TODO:
    //   1. Loop through all habits
    //   2. Set each habit's completedToday back to false
    //      (streaks stay as-is — they were already counted)
    //   3. Call render()
    // ====================================================
    function resetDay() {
      // your code here
    }


    // ====================================================
    // updateSummary()
    // Updates the three stat boxes at the top
    // TODO:
    //   1. Count total habits
    //   2. Count how many are completedToday
    //      Hint: .filter() is great here
    //   3. Calculate completion % (done / total * 100)
    //      Handle the case where total is 0 (avoid NaN)
    //   4. Update the text of #stat-total, #stat-done, #stat-pct
    // ====================================================
    function updateSummary() {
      // your code here
    }


    // ====================================================
    // render()
    // Redraws the entire habit list and updates the summary
    //
    // <div class="habit-card [completed?]">
    //   <button class="check-btn" onclick="toggleHabit(id)">✓</button>
    //   <div class="habit-info">
    //     <div class="habit-name">name</div>
    //     <div class="habit-meta">added today</div>
    //   </div>
    //   <span class="streak">🔥 N days</span>
    //   <button class="delete-btn" onclick="deleteHabit(id)">×</button>
    // </div>
    // ====================================================
    function render() {
      // Get the #habit-list and the #empty-msg elements
      let habitList = document.getElementById("habit-list");
      let emptyMsgDiv = document.getElementById("empty-msg");
      // If habits[] is empty
      if(habits.length === 0){
        //show the #empty-msg div
        emptyMsgDiv.style.display = 'block';
      } else {
        // else hide it
        //emptyMsgDiv.style.display = 'none';
        // and then, loop through habits[]
        for(let i = 0; i < habits.length; i++){
          //and for each one, build an HTML string for a .habit-card div (use the CSS classes already defined for you)
          let html = "";
          let classBool;
          if(habits[i].completedToday)
            classBool = 'completed'

          html += `<div class="habit-card ${classBool}">
                      <button class="check-btn" onclick="toggleHabit(id)">✓</button>
                      <div class="habit-info">
                        <div class="habit-name">${habits[i].name}</div>
                        <div class="habit-meta">added today</div>
                      </div>
                      <span class="streak">🔥 ${habits[i].streak} days</span>
                      <button class="delete-btn" onclick="deleteHabit(${habits[i].id})">×</button>
                    </div>`;
          //Set the innerHTML of #habit-list to your built string
          habitList.innerHTML = html;
          //Call updateSummary()
          updateSummary();
        }
      }
    }


    // ====================================================
    // INIT — runs once when the page loads
    // ====================================================
    render();
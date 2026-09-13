
  /* PAGE TITLES */

  const pageTitles = {
    "dashboard": "Dashboard",
    "documents": "Documents",
    "add-record": "Add Record",
    "validation": "Validation",
    "map": "Land Map",
    "reports": "Reports",
    "users": "Users",
    "settings": "Settings"
  };


  /* SHOW PAGE */

  function showPage(pageId, button) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
      page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");


    const buttons = document.querySelectorAll(".menu button");

    buttons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    if (button) {
      button.classList.add("active");
    }

    document.getElementById("pageHeading").textContent =
      pageTitles[pageId];

    document.getElementById("sidebar").classList.remove("show");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  /* MOBILE MENU */

  function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("show");
  }


  /* SEARCH DOCUMENTS */

  function searchDocuments() {

    const input =
      document.getElementById("searchInput").value.toLowerCase();

    const rows =
      document.querySelectorAll("#documentsTable tr");

    rows.forEach(function(row) {

      const text = row.innerText.toLowerCase();

      if (text.includes(input)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }

    });
  }


  /* FILTER DOCUMENTS */

  function filterDocuments() {

    const filter =
      document.getElementById("statusFilter").value;

    const rows =
      document.querySelectorAll("#documentsTable tr");

    rows.forEach(function(row) {

      if (filter === "all" ||
          row.innerText.includes(filter)) {

        row.style.display = "";

      } else {

        row.style.display = "none";
      }

    });
  }


  /* ADD RECORD */

  function addRecord(event) {

    event.preventDefault();

    const owner =
      document.getElementById("ownerName").value;

    const id =
      document.getElementById("recordId").value;

    const location =
      document.getElementById("location").value;

    const area =
      document.getElementById("landArea").value;


    const table =
      document.getElementById("documentsTable");


    const row =
      document.createElement("tr");


    row.innerHTML = `
      <td>${id}</td>
      <td>${owner}</td>
      <td>${location}</td>
      <td>${area}</td>
      <td>
        <span class="status review">
          Under Review
        </span>
      </td>
      <td>Just Now</td>
      <td>
        <button class="link-btn">View</button>
      </td>
    `;


    table.prepend(row);


    alert("New land record added successfully!");

    event.target.reset();

    showPage(
      "documents",
      document.querySelectorAll(".menu button")[1]
    );
  }


  /* VALIDATION RECORD */

  function showRecord(recordId) {

    const details =
      document.getElementById("validationDetails");


    details.innerHTML = `
      <h3>Record Review</h3>

      <br>

      <p>
        <strong>Record ID:</strong>
        ${recordId}
      </p>

      <br>

      <p>
        <strong>Owner:</strong>
        Sita Devi
      </p>

      <br>

      <p>
        <strong>Verification Checklist</strong>
      </p>

      <br>

      <label>
        <input type="checkbox" checked>
        Ownership document uploaded
      </label>

      <br><br>

      <label>
        <input type="checkbox" checked>
        Survey number matched
      </label>

      <br><br>

      <label>
        <input type="checkbox">
        Boundary verification completed
      </label>

      <br><br>

      <button class="green-btn"
        onclick="approveRecord('${recordId}')">
        ✓ Approve Record
      </button>
    `;
  }


  function approveRecord(recordId) {

    alert(recordId + " has been verified successfully!");

    document.getElementById("validationDetails").innerHTML = `
      <h3>Record Approved ✓</h3>

      <br>

      <p style="color:#239850;">
        ${recordId} has been successfully verified.
      </p>
    `;
  }


  /* SAVE SETTINGS */

  function saveSettings() {
    alert("Settings saved successfully!");
  }

  
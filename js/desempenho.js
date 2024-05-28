function selectMonth(element) {
  
    let months = document.querySelectorAll('.month');
    months.forEach(month => month.classList.remove('selected'));

    element.classList.add('selected');

    
    let underline = document.getElementById('underline');
    underline.style.marginLeft = element.offsetLeft + 'px';
    underline.style.width = element.offsetWidth + 'px';
}

document.getElementById("config-button").addEventListener("click", function() {
    this.style.backgroundColor = "#3e8e41";
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
        window.location.href = "wearable.html";
    }, 200);
});

document.addEventListener("DOMContentLoaded", function() {
    var dropdownOptions = document.querySelectorAll('.dropdown-content a');
    dropdownOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            var selectedPeriod = document.getElementById('selectedPeriod');
            selectedPeriod.textContent = this.textContent;
        });
    });
});




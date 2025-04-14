// Get references to the DOM elements
const recordBtn = document.getElementById('recordBtn');    // Button to start/stop recording
const textOutput = document.getElementById('textOutput');  // Element where transcribed text will appear
const historyList = document.getElementById('historyList'); // List to display past transcriptions
const clearHistoryBtn = document.getElementById('clearHistoryBtn'); // Button to clear history

let recognition;  // Will hold the SpeechRecognition instance
let isRecording = false;  // State to track if recording is in progress

// Load transcription history from Local Storage (if any)
const loadHistory = () => {
  // Retrieve and parse saved transcription history
  const savedHistory = JSON.parse(localStorage.getItem('transcriptionHistory')) || [];
  
  // Add each item in the history to the displayed list
  savedHistory.forEach((text) => addToHistoryList(text));
};

// Function to add a transcription to the history list
const addToHistoryList = (text) => {
  const li = document.createElement('li'); // Create a new list item
  li.textContent = text;  // Set its text to the transcription
  historyList.appendChild(li);  // Append the new item to the history list
};

// Save a transcription to Local Storage
const saveToHistory = (text) => {
  // Retrieve and parse saved history
  const savedHistory = JSON.parse(localStorage.getItem('transcriptionHistory')) || [];
  
  // Add the new transcription to the history array
  savedHistory.push(text);
  
  // Save the updated history back to Local Storage
  localStorage.setItem('transcriptionHistory', JSON.stringify(savedHistory));
  
  // Add the transcription to the displayed history list
  addToHistoryList(text);
};

// Event listener to clear history
if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener('click', () => {
    localStorage.removeItem('transcriptionHistory');  // Remove history from Local Storage
    historyList.innerHTML = ''; // Clear the displayed history
  });
}

// Check if the browser supports Speech Recognition API
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  // Initialize SpeechRecognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();  // Create a new instance of SpeechRecognition
  recognition.lang = 'en-US';  // Set language to English
  recognition.interimResults = false;  // Only final results will be returned

  // Event handler when speech recognition starts
  recognition.onstart = () => {
    textOutput.textContent = "Listening...";  // Update the text to indicate listening
    textOutput.classList.add('active');  // Add animation class to text output
    recordBtn.classList.add('active');  // Add animation class to record button
  };

  // Event handler to process the recognized speech
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript; // Get the transcribed text
    textOutput.textContent = transcript;  // Display the transcribed text
    saveToHistory(transcript); // Save it to history
  };

  // Event handler for errors during speech recognition
  recognition.onerror = (event) => {
    textOutput.textContent = `Error: ${event.error}`;  // Display the error message
  };

  // Event handler when speech recognition ends
  recognition.onend = () => {
    isRecording = false;  // Set recording state to false
    recordBtn.textContent = "Start Recording";  // Reset button text to indicate start
    textOutput.classList.remove('active');  // Remove animation class from text output
    recordBtn.classList.remove('active');  // Remove animation class from record button
  };
} else {
  alert("Speech Recognition is not supported in your browser.");  // Alert if SpeechRecognition is not supported
}

// Button click event listener to start/stop recording
recordBtn.addEventListener('click', () => {
  if (!isRecording) {
    recognition.start();  // Start speech recognition
    isRecording = true;  // Set recording state to true
    recordBtn.textContent = "Stop Recording";  // Update button text to show "Stop"
  } else {
    recognition.stop();  // Stop speech recognition
    isRecording = false;  // Set recording state to false
    recordBtn.textContent = "Start Recording";  // Reset button text to show "Start"
  }
});

// Load the transcription history when the page loads
loadHistory();

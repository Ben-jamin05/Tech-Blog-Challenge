const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/users/newpost', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, refresh the dashboard
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('.new-post-form').addEventListener('submit', newPostFormHandler);
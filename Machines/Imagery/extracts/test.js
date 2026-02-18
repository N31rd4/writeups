async function createNewGroup() {
    const newGroupNameInput = document.getElementById('newGroupNameInput');
    const newGroupName = DOMPurify.sanitize(newGroupNameInput.value.trim());
  
    if (!newGroupName) {
      showMessage('New group name cannot be empty.', 'error');
      return;
    }
  
    try {
      const response = await fetch(`${window.location.origin}/create_image_collection`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          collectionName: newGroupName
        })
      });
      const data = await response.json();
      if (data.success) {
        showMessage(data.message, 'success');
        newGroupNameInput.value = '';
        newGroupNameInput.style.display = 'none';
        document.getElementById('saveNewGroupBtn').style.display = 'none';
        populateImageGroupDropdown();
      } else {
        showMessage(data.message, 'error');
      }
    } catch (error) {
      console.error('Error creating new group:', error);
      showMessage('An unexpected error occurred while creating the new group.', 'error');
    }
}
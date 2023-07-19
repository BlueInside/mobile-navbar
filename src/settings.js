export default function renderSettingsPage() {
  const display = document.querySelector('.main-content');

  const settingsData = [
    { label: 'Name:', type: 'text' },
    { label: 'Email:', type: 'email' },
    {
      label: 'Language:',
      type: 'select',
      options: ['English', 'Spanish', 'French'],
    },
  ];

  // Get the settings container element
  display.innerText = '';

  // Create settings elements dynamically
  settingsData.forEach((setting) => {
    const settingsContainer = document.createElement('settings-container');
    const settingItem = document.createElement('div');
    settingItem.classList.add('setting-item');

    const label = document.createElement('label');
    label.textContent = setting.label;

    let input;

    if (setting.type === 'select') {
      input = document.createElement('select');
      setting.options.forEach((option) => {
        const optionElement = document.createElement('option');
        optionElement.textContent = option;
        input.appendChild(optionElement);
      });
    } else {
      input = document.createElement('input');
      input.setAttribute('type', setting.type);
    }

    settingItem.appendChild(label);
    settingItem.appendChild(input);
    settingsContainer.appendChild(settingItem);
    display.appendChild(settingsContainer);
  });
}

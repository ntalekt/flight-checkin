export const checkIn = async (formData) => {
  try {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        confirmation: formData.confirmation,
        first_name: formData.firstName,
        last_name: formData.lastName
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.output);
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

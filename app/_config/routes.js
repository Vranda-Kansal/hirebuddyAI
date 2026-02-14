// app/_config/routes.js

export const FEATURE_ROUTES = {
    '123234324': '/upload',
    '123234546': '/job_application_tracker',
};

// Helper function to get route safely
export const getFeatureRoute = (cardId) => {
    return FEATURE_ROUTES[cardId] || '/';  // Default to home if not found
};

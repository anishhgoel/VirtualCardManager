// Component declarations
declare module './pages/Dashboard' {
  import React from 'react';
  const Dashboard: React.FC;
  export default Dashboard;
}

declare module './pages/CardDetails' {
  import React from 'react';
  const CardDetails: React.FC<{ id: string }>;
  export default CardDetails;
}

declare module './pages/CreateCard' {
  import React from 'react';
  const CreateCard: React.FC;
  export default CreateCard;
}

declare module './components/Layout' {
  import React from 'react';
  const Layout: React.FC<{ children: React.ReactNode }>;
  export default Layout;
} 
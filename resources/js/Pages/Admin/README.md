# NACP Admin Panel Structure

This directory contains all the admin pages for the National AIDS Control Programme (NACP) Tanzania website.

## Directory Structure

```
Admin/
├── Dashboard.tsx                 # Main dashboard (already exists in parent)
├── Users/
│   ├── Index.tsx                # User management listing
│   ├── Create.tsx               # Create new user
│   ├── Edit.tsx                 # Edit existing user
│   └── Show.tsx                 # View user details
├── Resources/
│   ├── Index.tsx                # Resources management
│   ├── StrategicFramework/      # Strategic Framework & Policies
│   ├── Guidelines/              # Guidelines management
│   ├── Databases/               # Database management
│   └── SopManuals/              # SOP & Manuals
├── News/
│   ├── Index.tsx                # News & Media listing
│   ├── Blogs/                   # Blog management
│   ├── PressReleases/           # Press releases
│   ├── Speeches/                # Speeches management
│   └── Media/                   # Photo & Video galleries
├── Content/
│   ├── Pages/                   # Website pages management
│   ├── Services/                # Services content
│   ├── Interventions/           # Interventions management
│   └── About/                   # About sections
├── Statistics/
│   ├── Hiv/                     # HIV statistics
│   ├── Reports/                 # Program reports
│   ├── Analytics/               # Data analytics
│   └── Export/                  # Data export tools
└── Settings/
    ├── Index.tsx                # System settings
    ├── General/                 # General settings
    ├── Users/                   # User management settings
    ├── System/                  # System configuration
    └── Backup/                  # Backup & security
```

## Navigation Structure

The admin sidebar includes the following main sections:

### 1. Dashboard
- Main overview with statistics and quick actions
- System health monitoring
- Recent activities

### 2. Users
- User management and permissions
- Role-based access control
- User activity monitoring

### 3. Resources
- **Strategic Framework & Policies**: National strategies and policy documents
- **Guidelines**: Implementation guidelines and protocols
- **Databases**: Data management and surveillance systems
- **SOP & Manuals**: Standard operating procedures and training materials

### 4. News & Media
- **Blogs**: Blog posts and articles
- **Press Releases**: Official press releases
- **Speeches**: Ministerial and official speeches
- **Photo Gallery**: Image collections and galleries
- **Video Library**: Video content and documentaries

### 5. Content Management
- **Pages**: Website page content
- **Services**: Service descriptions and information
- **Interventions**: HIV intervention programs
- **About Sections**: Organizational information

### 6. Statistics & Reports
- **HIV Statistics**: Epidemiological data and trends
- **Program Reports**: Implementation reports and progress
- **Data Analytics**: Advanced analytics and insights
- **Export Data**: Data export and reporting tools

### 7. Settings
- **General Settings**: Basic system configuration
- **User Management**: User roles and permissions
- **System Configuration**: Technical settings
- **Backup & Security**: Data backup and security policies

## Features

### Layout Features
- **Sticky Header**: Header remains visible when scrolling
- **Collapsible Sidebar**: Icon-only mode for more screen space
- **Breadcrumb Navigation**: Clear navigation path
- **NACP Branding**: Consistent branding throughout

### UI Components
- Built with shadcn/ui components
- Responsive design for all screen sizes
- Modern gradient designs
- Professional color scheme
- Accessible interface

### Security Features
- Role-based access control
- Session management
- Activity logging
- Secure authentication

## Usage

Each admin page follows the same pattern:

```tsx
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function PageName() {
    const breadcrumbs = [
        { label: "Admin", href: "/dashboard" },
        { label: "Section Name" }
    ];

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Page Title - NACP Admin" />
            {/* Page content */}
        </AdminLayout>
    );
}
```

## Styling

The admin panel uses:
- **Primary Colors**: Blue (#2563eb) to Purple (#7c3aed) gradients
- **NACP Branding**: Shield icon and official colors
- **Typography**: Clean, professional fonts
- **Spacing**: Consistent padding and margins
- **Cards**: Elevated cards with subtle shadows

## Development Notes

- All pages use TypeScript for type safety
- Inertia.js for seamless navigation
- Laravel backend integration
- Responsive design principles
- Accessibility considerations

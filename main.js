// WAG Portal - Main JavaScript File
// Handles all interactive functionality, animations, and data visualization

// Global state management
let currentUserRole = 'user'; // 'user' or 'manager'
let notificationCount = 3;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize typed text effect
    initializeTypedText();
    
    // Initialize charts
    initializeCharts();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Initialize role-based features
    initializeRoleBasedFeatures();
    
    console.log('WAG Portal initialized successfully');
}

// Typed text animation for hero section
function initializeTypedText() {
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        new Typed('#typed-text', {
            strings: [
                'Streamline your workplace operations with intelligent management tools',
                'Track defects, manage leave requests, and book facilities seamlessly',
                'Collaborate on technical projects and share innovative ideas',
                'Stay connected with real-time office communications and updates'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
}

// Initialize ECharts for data visualization
function initializeCharts() {
    initializeRequestTrendsChart();
    initializeModuleUsageChart();
}

function initializeRequestTrendsChart() {
    const chartElement = document.getElementById('requestTrendsChart');
    if (!chartElement) return;

    const chart = echarts.init(chartElement);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Defects', 'Leave Requests', 'Facility Bookings']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Defects',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 3
                },
                areaStyle: {
                    opacity: 0.3
                },
                emphasis: {
                    focus: 'series'
                },
                data: [3, 5, 2, 8, 4, 6, 3],
                color: '#EF4444'
            },
            {
                name: 'Leave Requests',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 3
                },
                areaStyle: {
                    opacity: 0.3
                },
                emphasis: {
                    focus: 'series'
                },
                data: [2, 4, 6, 3, 7, 5, 4],
                color: '#3B82F6'
            },
            {
                name: 'Facility Bookings',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 3
                },
                areaStyle: {
                    opacity: 0.3
                },
                emphasis: {
                    focus: 'series'
                },
                data: [8, 12, 6, 15, 10, 14, 9],
                color: '#10B981'
            }
        ]
    };

    chart.setOption(option);
    
    // Make chart responsive
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

function initializeModuleUsageChart() {
    const chartElement = document.getElementById('moduleUsageChart');
    if (!chartElement) return;

    const chart = echarts.init(chartElement);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Defect Tracker', 'Leave Request', 'Facility Booking', 'Tech Board', 'Suggestion Box', 'Office Pulse']
        },
        series: [
            {
                name: 'Module Usage',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 25, name: 'Defect Tracker', itemStyle: { color: '#EF4444' } },
                    { value: 20, name: 'Leave Request', itemStyle: { color: '#3B82F6' } },
                    { value: 30, name: 'Facility Booking', itemStyle: { color: '#10B981' } },
                    { value: 15, name: 'Tech Board', itemStyle: { color: '#8B5CF6' } },
                    { value: 6, name: 'Suggestion Box', itemStyle: { color: '#F59E0B' } },
                    { value: 4, name: 'Office Pulse', itemStyle: { color: '#6366F1' } }
                ]
            }
        ]
    };

    chart.setOption(option);
    
    // Make chart responsive
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

// Initialize animations using Anime.js
function initializeAnimations() {
    // Animate cards on scroll
    const cards = document.querySelectorAll('.card-hover');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutQuart',
                    delay: Math.random() * 200
                });
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Animate stats on scroll
    const statsSection = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-4');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                }
            });
        }, {
            threshold: 0.5
        });
        
        statsObserver.observe(statsSection);
    }
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.text-2xl.font-semibold');
    
    statNumbers.forEach((stat, index) => {
        const finalValue = parseInt(stat.textContent);
        
        anime({
            targets: stat,
            innerHTML: [0, finalValue],
            duration: 2000,
            delay: index * 200,
            easing: 'easeOutQuart',
            round: 1
        });
    });
}

// Initialize event listeners
function initializeEventListeners() {
    // Role toggle button
    const roleToggle = document.getElementById('roleToggle');
    if (roleToggle) {
        roleToggle.addEventListener('click', toggleUserRole);
    }

    // Notification button
    const notificationBtn = document.getElementById('notificationBtn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', showNotificationModal);
    }

    // User avatar click
    const userAvatar = document.getElementById('userAvatar');
    if (userAvatar) {
        userAvatar.addEventListener('click', showUserProfile);
    }

    // Close modal when clicking outside
    document.addEventListener('click', function(event) {
        const modal = document.getElementById('notificationModal');
        if (modal && event.target === modal) {
            closeNotificationModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeNotificationModal();
        }
    });
}

// Role management functions
function toggleUserRole() {
    const roleToggle = document.getElementById('roleToggle');
    
    if (currentUserRole === 'user') {
        currentUserRole = 'manager';
        roleToggle.textContent = 'Switch to User';
        roleToggle.classList.remove('bg-emerald-500', 'hover:bg-emerald-600');
        roleToggle.classList.add('bg-purple-500', 'hover:bg-purple-600');
        
        // Show manager-specific features
        showManagerFeatures();
    } else {
        currentUserRole = 'user';
        roleToggle.textContent = 'Switch to Manager';
        roleToggle.classList.remove('bg-purple-500', 'hover:bg-purple-600');
        roleToggle.classList.add('bg-emerald-500', 'hover:bg-emerald-600');
        
        // Hide manager-specific features
        hideManagerFeatures();
    }
    
    // Update notification badge
    updateNotificationBadge();
    
    // Show role change notification
    showToast(`Switched to ${currentUserRole} view`, 'info');
}

function showManagerFeatures() {
    // Add manager-specific UI elements
    const modulesSection = document.getElementById('modulesSection');
    if (modulesSection) {
        // Add approval badges for managers
        const approvalBadges = modulesSection.querySelectorAll('.absolute.top-4.right-4');
        approvalBadges.forEach(badge => {
            if (badge.textContent.includes('Pending') || badge.textContent.includes('New')) {
                badge.classList.add('animate-pulse');
            }
        });
    }
}

function hideManagerFeatures() {
    // Remove manager-specific UI elements
    const modulesSection = document.getElementById('modulesSection');
    if (modulesSection) {
        const approvalBadges = modulesSection.querySelectorAll('.absolute.top-4.right-4');
        approvalBadges.forEach(badge => {
            badge.classList.remove('animate-pulse');
        });
    }
}

function initializeRoleBasedFeatures() {
    // Initialize features based on current role
    if (currentUserRole === 'manager') {
        showManagerFeatures();
    }
}

// Notification functions
function showNotificationModal() {
    const modal = document.getElementById('notificationModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Animate modal appearance
        anime({
            targets: modal.querySelector('.bg-white'),
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutBack'
        });
    }
}

function closeNotificationModal() {
    const modal = document.getElementById('notificationModal');
    if (modal) {
        anime({
            targets: modal.querySelector('.bg-white'),
            scale: [1, 0.8],
            opacity: [1, 0],
            duration: 200,
            easing: 'easeInBack',
            complete: function() {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    }
}

function updateNotificationBadge() {
    const badge = document.getElementById('notificationBadge');
    if (badge) {
        if (currentUserRole === 'manager') {
            // Managers see more notifications
            notificationCount = 8;
            badge.textContent = '8';
            badge.classList.add('animate-pulse');
        } else {
            // Regular users see fewer notifications
            notificationCount = 3;
            badge.textContent = '3';
            badge.classList.remove('animate-pulse');
        }
    }
}

// User profile functions
function showUserProfile() {
    const currentUser = getCurrentUser();
    
    // Create and show user profile modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div class="text-center">
                <img class="h-20 w-20 rounded-full mx-auto mb-4" src="${currentUser.avatar}" alt="${currentUser.name}">
                <h3 class="text-lg font-semibold text-slate-800">${currentUser.name}</h3>
                <p class="text-sm text-slate-600">${currentUser.role}</p>
                <p class="text-sm text-slate-600">${currentUser.department}</p>
            </div>
            <div class="mt-6 space-y-3">
                <div class="flex justify-between">
                    <span class="text-sm text-slate-600">Email:</span>
                    <span class="text-sm font-medium text-slate-800">${currentUser.email}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-sm text-slate-600">Employee ID:</span>
                    <span class="text-sm font-medium text-slate-800">${currentUser.employeeId}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-sm text-slate-600">Join Date:</span>
                    <span class="text-sm font-medium text-slate-800">${currentUser.joinDate}</span>
                </div>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="mt-6 w-full bg-slate-500 text-white py-2 rounded-md hover:bg-slate-600 transition-colors">
                Close
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animate modal appearance
    anime({
        targets: modal.querySelector('.bg-white'),
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutBack'
    });
}

function getCurrentUser() {
    // Mock user data - in a real app, this would come from authentication
    const users = {
        user: {
            name: 'John Smith',
            role: 'Software Engineer',
            department: 'IT Department',
            email: 'john.smith@company.com',
            employeeId: 'EMP001',
            joinDate: 'January 15, 2022',
            avatar: './resources/user-avatars/avatar-1.jpg'
        },
        manager: {
            name: 'Sarah Johnson',
            role: 'IT Manager',
            department: 'IT Department',
            email: 'sarah.johnson@company.com',
            employeeId: 'EMP002',
            joinDate: 'March 10, 2020',
            avatar: './resources/user-avatars/avatar-5.jpg'
        }
    };
    
    return currentUserRole === 'manager' ? users.manager : users.user;
}

// Utility functions
function scrollToModules() {
    const modulesSection = document.getElementById('modulesSection');
    if (modulesSection) {
        modulesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function showDemo() {
    // Create demo modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-6 max-w-lg w-full mx-4">
            <h3 class="text-xl font-semibold text-slate-800 mb-4">WAG Portal Demo</h3>
            <div class="space-y-4">
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">1</div>
                    <div>
                        <p class="font-medium text-slate-800">Report Equipment Issues</p>
                        <p class="text-sm text-slate-600">Use the Defect Tracker to report any equipment problems</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</div>
                    <div>
                        <p class="font-medium text-slate-800">Request Time Off</p>
                        <p class="text-sm text-slate-600">Submit leave requests through the Leave Request system</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">3</div>
                    <div>
                        <p class="font-medium text-slate-800">Book Facilities</p>
                        <p class="text-sm text-slate-600">Reserve meeting rooms and equipment in real-time</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">4</div>
                    <div>
                        <p class="font-medium text-slate-800">Collaborate on Projects</p>
                        <p class="text-sm text-slate-600">Use the Tech Board for MEP design collaboration</p>
                    </div>
                </div>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="mt-6 w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600 transition-colors">
                Got it!
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animate modal appearance
    anime({
        targets: modal.querySelector('.bg-white'),
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutBack'
    });
}

// Toast notification system
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-medium transform translate-x-full transition-transform duration-300`;
    
    // Set color based on type
    switch (type) {
        case 'success':
            toast.classList.add('bg-green-500');
            break;
        case 'error':
            toast.classList.add('bg-red-500');
            break;
        case 'warning':
            toast.classList.add('bg-yellow-500');
            break;
        default:
            toast.classList.add('bg-blue-500');
    }
    
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-x-full');
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Form validation utilities
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateRequired(value) {
    return value && value.trim().length > 0;
}

function validateDateRange(startDate, endDate) {
    return new Date(startDate) <= new Date(endDate);
}

// Date formatting utilities
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatDateTime(date) {
    return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Local storage utilities
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
    }
}

function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return null;
    }
}

// Export functions for use in other modules
window.WAGPortal = {
    showToast,
    validateEmail,
    validateRequired,
    validateDateRange,
    formatDate,
    formatDateTime,
    saveToLocalStorage,
    getFromLocalStorage,
    currentUserRole,
    scrollToModules,
    showDemo
};
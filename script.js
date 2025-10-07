// Enhanced Electra Neural Dashboard System
class ElectraNeuralDashboard {
    constructor() {
        this.vehicleData = {
            'tesla-model-s': { 
                name: 'Tesla Model S Plaid+', 
                battery: 87, 
                range: 534, 
                chargeTime: 23, 
                cost: 0.018,
                efficiency: 89
            },
            'cybertruck': { 
                name: 'Cybertruck', 
                battery: 92, 
                range: 547, 
                chargeTime: 28, 
                cost: 0.015,
                efficiency: 91
            },
            'bmw-ix': { 
                name: 'BMW iX M60', 
                battery: 78, 
                range: 425, 
                chargeTime: 31, 
                cost: 0.022,
                efficiency: 84
            },
            'lucid-air': { 
                name: 'Lucid Air Dream', 
                battery: 95, 
                range: 516, 
                chargeTime: 20, 
                cost: 0.019,
                efficiency: 94
            }
        };

        this.stationData = [
            {
                id: 'neo-tokyo-hub',
                name: 'Neo-Tokyo Energy Hub',
                location: 'Sector 7 • Neural District',
                available: 7,
                occupied: 3,
                features: ['WiFi', 'Café', 'Shop'],
                status: 'online',
                waitTime: '0 min'
            },
            {
                id: 'quantum-industrial',
                name: 'Quantum Industrial Core',
                location: 'Grid-47 • Manufacturing Zone',
                available: 12,
                occupied: 1,
                features: ['Fleet', 'Service'],
                status: 'online',
                waitTime: '2 min'
            },
            {
                id: 'cyber-plaza',
                name: 'Cyber Commerce Plaza',
                location: 'Level-9 • Shopping District',
                available: 5,
                occupied: 7,
                features: ['Food', 'Games'],
                status: 'busy',
                waitTime: '8 min'
            }
        ];

        this.notifications = [];
        this.charts = {};
        this.intervals = {};
        
        this.init();
    }

    init() {
        this.initializeFuturisticElements();
        this.initializeCharts();
        this.initializeEventListeners();
        this.initializeRealTimeUpdates();
        this.initializeAudioSystem();
        this.initializeWeatherWidget();
        this.startNeuralProcesses();
    }

    // Initialize futuristic visual elements
    initializeFuturisticElements() {
        this.createParticleSystem();
        this.initializeHolographicElements();
        this.setupQuantumAnimations();
        this.initializeStatusIndicators();
    }

    createParticleSystem() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'neural-particles';
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        `;

        // Create floating neural particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'neural-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: ${Math.random() > 0.5 ? '#00ffff' : '#ff1493'};
                border-radius: 50%;
                opacity: ${Math.random() * 0.6 + 0.2};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: neuralFloat ${Math.random() * 20 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                box-shadow: 0 0 ${Math.random() * 10 + 5}px currentColor;
            `;
            particleContainer.appendChild(particle);
        }

        document.body.appendChild(particleContainer);
    }

    initializeHolographicElements() {
        // Enhanced holographic car animation
        const carBody = document.querySelector('.car-body');
        const wheels = document.querySelectorAll('.wheel');
        
        if (carBody) {
            setInterval(() => {
                const hue = (Date.now() / 50) % 360;
                carBody.style.filter = `hue-rotate(${hue}deg) brightness(1.2)`;
            }, 100);
        }

        wheels.forEach(wheel => {
            wheel.style.animation = 'wheelSpin 2s linear infinite, wheelGlow 3s ease-in-out infinite alternate';
        });
    }

    setupQuantumAnimations() {
        // Quantum path animation with dynamic colors
        const quantumPath = document.querySelector('.quantum-path');
        if (quantumPath) {
            let intensity = 0;
            setInterval(() => {
                intensity = (intensity + 2) % 360;
                quantumPath.style.background = `linear-gradient(90deg, 
                    hsl(${intensity}, 100%, 60%), 
                    hsl(${(intensity + 120) % 360}, 100%, 60%), 
                    hsl(${(intensity + 240) % 360}, 100%, 60%))`;
                quantumPath.style.boxShadow = `0 0 ${15 + Math.sin(intensity * 0.1) * 10}px hsl(${intensity}, 100%, 60%)`;
            }, 100);
        }

        // Core rings dynamic animation
        const rings = document.querySelectorAll('.ring');
        rings.forEach((ring, index) => {
            setInterval(() => {
                const hue = (Date.now() / 100 + index * 120) % 360;
                ring.style.borderColor = `hsl(${hue}, 70%, 60%)`;
                ring.style.boxShadow = `0 0 15px hsl(${hue}, 70%, 60%)`;
            }, 150);
        });
    }

    initializeStatusIndicators() {
        // Real-time status updates
        const updateStatus = (elementId, status, icon, text) => {
            const element = document.getElementById(elementId);
            if (element) {
                element.className = `status-indicator ${status}`;
                element.innerHTML = `<i class="${icon}"></i><span>${text}</span>`;
            }
        };

        // Simulate dynamic status changes
        setInterval(() => {
            const statuses = [
                { id: 'connectionStatus', status: 'connected', icon: 'fas fa-wifi', text: 'Connected' },
                { id: 'chargingStatus', status: 'idle', icon: 'fas fa-plug', text: 'Idle' },
                { id: 'climateStatus', status: 'optimal', icon: 'fas fa-thermometer-half', text: `${Math.floor(Math.random() * 5) + 20}°C` }
            ];

            statuses.forEach(statusInfo => {
                updateStatus(statusInfo.id, statusInfo.status, statusInfo.icon, statusInfo.text);
            });
        }, 10000);
    }

    // Initialize advanced charts
    initializeCharts() {
        this.initializeEnergyMatrix();
        this.initializeNeuralChart();
    }

    initializeEnergyMatrix() {
        const ctx = document.getElementById('energyMatrix');
        if (!ctx) return;

        this.charts.energyMatrix = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [87, 13],
                    backgroundColor: [
                        this.createRadialGradient(ctx, '#00ffff', '#ff1493'),
                        'rgba(255, 255, 255, 0.1)'
                    ],
                    borderWidth: 0,
                    cutout: '75%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { 
                    legend: { display: false },
                    tooltip: { enabled: false }
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 2000,
                    easing: 'easeInOutQuart'
                }
            }
        });

        // Animate the chart periodically
        setInterval(() => {
            const newValue = Math.floor(Math.random() * 10) + 85;
            this.updateEnergyMatrix(newValue);
        }, 15000);
    }

    initializeNeuralChart() {
        const ctx = document.getElementById('neuralChart');
        if (!ctx) return;

        const gradient1 = this.createLinearGradient(ctx, '#ff1493', '#8a2be2');
        const gradient2 = this.createLinearGradient(ctx, '#ffa500', '#ff6347');
        const gradient3 = this.createLinearGradient(ctx, '#8a2be2', '#00ffff');

        this.charts.neuralChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Home Base',
                    data: [45, 38, 52, 41],
                    backgroundColor: gradient1,
                    borderRadius: 8,
                    barThickness: 12
                }, {
                    label: 'Work Hub',
                    data: [31, 42, 28, 35],
                    backgroundColor: gradient2,
                    borderRadius: 8,
                    barThickness: 12
                }, {
                    label: 'Quantum Grid',
                    data: [24, 20, 20, 24],
                    backgroundColor: gradient3,
                    borderRadius: 8,
                    barThickness: 12
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { 
                            color: '#64748b',
                            font: { family: 'Orbitron', size: 10 }
                        }
                    },
                    y: {
                        grid: { color: 'rgba(0, 255, 255, 0.1)' },
                        ticks: { 
                            color: '#64748b',
                            font: { family: 'Orbitron', size: 10 }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutBounce'
                }
            }
        });
    }

    createRadialGradient(ctx, color1, color2) {
        const gradient = ctx.getContext('2d').createRadialGradient(100, 100, 0, 100, 100, 100);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        return gradient;
    }

    createLinearGradient(ctx, color1, color2) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        return gradient;
    }

    updateEnergyMatrix(newValue) {
        const syncRate = document.getElementById('syncRate');
        const efficiencyFill = document.getElementById('efficiencyFill');
        const efficiencyValue = document.getElementById('efficiencyValue');

        if (syncRate) syncRate.textContent = `${newValue}%`;
        if (efficiencyFill) efficiencyFill.style.width = `${newValue}%`;
        if (efficiencyValue) efficiencyValue.textContent = `${newValue}%`;

        if (this.charts.energyMatrix) {
            this.charts.energyMatrix.data.datasets[0].data = [newValue, 100 - newValue];
            this.charts.energyMatrix.update('active');
        }
    }

    // Initialize event listeners
    initializeEventListeners() {
        this.initializeNavigationEvents();
        this.initializeVehicleControls();
        this.initializeStationEvents();
        this.initializeNotificationEvents();
        this.initializeSearchEvents();
        this.initializeQuickActions();
        this.initializeVoiceCommands();
    }

    initializeNavigationEvents() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleNavigation(item);
            });
        });
    }

    handleNavigation(item) {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Add ripple effect
        this.createRippleEffect(item, event);

        // Play navigation sound
        this.playSound(440, 0.1, 'sine');

        // Navigate after animation
        const href = item.getAttribute('href');
        if (href && href !== '#' && href !== window.location.pathname) {
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    }

    initializeVehicleControls() {
        const vehicleSelector = document.getElementById('vehicleSelector');
        if (vehicleSelector) {
            vehicleSelector.addEventListener('change', (e) => {
                this.updateVehicleData(e.target.value);
            });
        }

        // Vehicle control buttons
        const controls = ['preConditionBtn', 'lockVehicleBtn', 'locateVehicleBtn'];
        controls.forEach(controlId => {
            const btn = document.getElementById(controlId);
            if (btn) {
                btn.addEventListener('click', () => {
                    this.handleVehicleControl(controlId);
                });
            }
        });
    }

    updateVehicleData(vehicleId) {
        const vehicle = this.vehicleData[vehicleId];
        if (!vehicle) return;

        // Update display values with animation
        this.animateValueUpdate('powerLevel', `${vehicle.battery}%`);
        this.animateValueUpdate('rangeValue', vehicle.range);
        this.animateValueUpdate('chargeTimeValue', vehicle.chargeTime);
        this.animateValueUpdate('costValue', `₿${vehicle.cost}`);
        
        // Update efficiency
        this.updateEnergyMatrix(vehicle.efficiency);

        // Show vehicle change notification
        this.showNotification('Vehicle Updated', `Switched to ${vehicle.name}`, 'success');
    }

    handleVehicleControl(controlId) {
        const actions = {
            'preConditionBtn': () => {
                this.showNotification('Pre-Conditioning', 'Climate control activated', 'info');
                this.animateButton(controlId, 'fas fa-spinner fa-spin');
            },
            'lockVehicleBtn': () => {
                const btn = document.getElementById(controlId);
                const isLocked = btn.innerHTML.includes('fa-lock');
                const newIcon = isLocked ? 'fas fa-unlock' : 'fas fa-lock';
                const action = isLocked ? 'Unlocked' : 'Locked';
                
                this.animateButton(controlId, newIcon);
                this.showNotification('Vehicle Security', `Vehicle ${action}`, 'success');
            },
            'locateVehicleBtn': () => {
                this.showNotification('Vehicle Located', 'Flashing lights and horn activated', 'success');
                this.animateButton(controlId, 'fas fa-map-marker-alt');
            }
        };

        if (actions[controlId]) {
            actions[controlId]();
            this.playSound(660, 0.15, 'triangle');
        }
    }

    initializeStationEvents() {
        const stationNodes = document.querySelectorAll('.station-node');
        stationNodes.forEach(node => {
            const syncBtn = node.querySelector('.sync-btn');
            if (syncBtn) {
                syncBtn.addEventListener('click', () => {
                    this.handleStationSync(node);
                });
            }
        });

        // Station filter
        const stationFilter = document.getElementById('stationFilter');
        if (stationFilter) {
            stationFilter.addEventListener('change', (e) => {
                this.filterStations(e.target.value);
            });
        }
    }

    handleStationSync(stationNode) {
        const stationId = stationNode.getAttribute('data-station-id');
        const stationName = stationNode.querySelector('h4').textContent;
        const syncBtn = stationNode.querySelector('.sync-btn');

        // Animation sequence
        syncBtn.style.transform = 'scale(0.95)';
        syncBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Syncing...';
        syncBtn.style.background = 'linear-gradient(135deg, #ffaa00, #ff6600)';

        setTimeout(() => {
            syncBtn.innerHTML = '<i class="fas fa-check"></i> Synchronized!';
            syncBtn.style.background = 'linear-gradient(135deg, #00ff00, #32cd32)';
            syncBtn.style.transform = 'scale(1.05)';
            
            this.showNotification('Station Sync Complete', `Connected to ${stationName}`, 'success');
            this.createSuccessParticles(syncBtn);
        }, 2000);

        setTimeout(() => {
            syncBtn.innerHTML = '<i class="fas fa-plug"></i> Neural Sync';
            syncBtn.style.background = 'linear-gradient(135deg, #00ffff, #ff1493)';
            syncBtn.style.transform = 'scale(1)';
        }, 4000);
    }

    filterStations(filterType) {
        const stationNodes = document.querySelectorAll('.station-node');
        stationNodes.forEach(node => {
            node.style.display = 'flex';
            node.style.opacity = '1';
        });

        // Apply filter logic here
        this.playSound(880, 0.2, 'square');
    }

    initializeNotificationEvents() {
        const notificationCenter = document.getElementById('notificationCenter');
        const notificationDropdown = document.getElementById('notificationDropdown');

        if (notificationCenter && notificationDropdown) {
            notificationCenter.addEventListener('click', () => {
                notificationDropdown.classList.toggle('show');
            });

            // Close on outside click
            document.addEventListener('click', (e) => {
                if (!notificationCenter.contains(e.target)) {
                    notificationDropdown.classList.remove('show');
                }
            });

            // Clear all notifications
            const clearAllBtn = notificationDropdown.querySelector('.clear-all-btn');
            if (clearAllBtn) {
                clearAllBtn.addEventListener('click', () => {
                    this.clearAllNotifications();
                });
            }
        }
    }

    initializeSearchEvents() {
        const searchInput = document.getElementById('neuralSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.performNeuralSearch(e.target.value);
            });

            searchInput.addEventListener('focus', () => {
                searchInput.parentElement.classList.add('focused');
            });

            searchInput.addEventListener('blur', () => {
                searchInput.parentElement.classList.remove('focused');
            });
        }
    }

    initializeQuickActions() {
        const quickActions = document.querySelectorAll('.quick-action-btn');
        quickActions.forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleQuickAction(btn.id);
            });
        });
    }

    handleQuickAction(actionId) {
        const actions = {
            'emergencyChargeBtn': () => this.findEmergencyCharge(),
            'nearestStationBtn': () => this.findNearestStation(),
            'scheduleChargeBtn': () => this.scheduleCharging(),
            'voiceCommandBtn': () => this.activateVoiceCommands()
        };

        if (actions[actionId]) {
            actions[actionId]();
        }
    }

    findEmergencyCharge() {
        this.showNotification('Emergency Mode', 'Searching for fastest charging options...', 'warning');
        setTimeout(() => {
            this.showNotification('Emergency Station Found', 'Ultra-fast charger 2.3km away', 'success');
        }, 2000);
    }

    findNearestStation() {
        this.showNotification('Location Services', 'Scanning neural network...', 'info');
        setTimeout(() => {
            this.showNotification('Nearest Station', 'Neo-Tokyo Hub - 5 min drive', 'success');
        }, 1500);
    }

    scheduleCharging() {
        this.showNotification('Schedule Assistant', 'AI analyzing optimal charging windows...', 'info');
        setTimeout(() => {
            this.showNotification('Schedule Set', 'Next charge: Tomorrow 2:00 AM', 'success');
        }, 2000);
    }

    initializeVoiceCommands() {
        // Voice command system
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            this.speechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            this.speechRecognition.continuous = false;
            this.speechRecognition.interimResults = false;
            this.speechRecognition.lang = 'en-US';

            this.speechRecognition.onresult = (event) => {
                const command = event.results[0][0].transcript.toLowerCase();
                this.processVoiceCommand(command);
            };

            this.speechRecognition.onerror = (event) => {
                this.showNotification('Voice Error', 'Could not process voice command', 'error');
            };
        }
    }

    activateVoiceCommands() {
        if (this.speechRecognition) {
            this.speechRecognition.start();
            this.showNotification('Voice Active', 'Listening for neural commands...', 'info');
        } else {
            this.showNotification('Voice Unavailable', 'Voice commands not supported', 'error');
        }
    }

    processVoiceCommand(command) {
        const commands = {
            'find station': () => this.findNearestStation(),
            'check battery': () => this.showBatteryStatus(),
            'start charging': () => this.handleQuickAction('emergencyChargeBtn'),
            'schedule charge': () => this.scheduleCharging(),
            'lock car': () => this.handleVehicleControl('lockVehicleBtn'),
            'unlock car': () => this.handleVehicleControl('lockVehicleBtn'),
        };

        for (const [key, action] of Object.entries(commands)) {
            if (command.includes(key)) {
                action();
                return;
            }
        }

        this.showNotification('Command Unknown', `"${command}" not recognized`, 'warning');
    }

    // Real-time updates system
    initializeRealTimeUpdates() {
        // Update timestamps
        this.intervals.timeUpdates = setInterval(() => {
            this.updateTimestamps();
        }, 30000);

        // Update station availability
        this.intervals.stationUpdates = setInterval(() => {
            this.updateStationAvailability();
        }, 45000);

        // Update vehicle metrics
        this.intervals.vehicleUpdates = setInterval(() => {
            this.updateVehicleMetrics();
        }, 20000);

        // Update neural flow
        this.intervals.neuralFlow = setInterval(() => {
            this.updateNeuralFlow();
        }, 10000);
    }

    updateTimestamps() {
        const timeElements = document.querySelectorAll('.current-time');
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        timeElements.forEach(element => {
            element.textContent = timeString;
        });
    }

    updateStationAvailability() {
        const portElements = document.querySelectorAll('.port.active');
        portElements.forEach(port => {
            const current = parseInt(port.textContent);
            const change = Math.floor(Math.random() * 3 - 1); // -1, 0, 1
            const newValue = Math.max(0, Math.min(20, current + change));
            
            if (newValue !== current) {
                this.animateValueUpdate(port, newValue);
                port.style.animation = 'portFlash 0.5s ease-in-out';
                setTimeout(() => {
                    port.style.animation = '';
                }, 500);
            }
        });

        // Update summary
        this.updateNetworkSummary();
    }

    updateVehicleMetrics() {
        // Simulate small changes in vehicle data
        const powerLevel = document.getElementById('powerLevel');
        if (powerLevel) {
            const current = parseInt(powerLevel.textContent);
            const newLevel = Math.min(100, current + Math.floor(Math.random() * 3));
            if (newLevel !== current) {
                this.animateValueUpdate('powerLevel', `${newLevel}%`);
            }
        }

        // Update range based on battery
        const rangeValue = document.getElementById('rangeValue');
        if (rangeValue) {
            const current = parseInt(rangeValue.textContent);
            const newRange = current + Math.floor(Math.random() * 10 - 5);
            this.animateValueUpdate('rangeValue', Math.max(400, Math.min(600, newRange)));
        }
    }

    updateNeuralFlow() {
        const neuralFlowValue = document.getElementById('neuralFlowValue');
        if (neuralFlowValue) {
            const newValue = Math.floor(Math.random() * 50) + 220;
            this.animateValueUpdate('neuralFlowValue', newValue);
        }
    }

    updateNetworkSummary() {
        const totalPorts = Array.from(document.querySelectorAll('.port.active'))
            .reduce((sum, port) => sum + parseInt(port.textContent), 0);

        this.animateValueUpdate('availablePorts', totalPorts);
        
        const avgWait = Math.floor(Math.random() * 5) + 1;
        this.animateValueUpdate('averageWait', `${avgWait}.${Math.floor(Math.random() * 9)}min`);
    }

    // Audio system
    initializeAudioSystem() {
        // Initialize Web Audio API
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API not supported');
        }
    }

    playSound(frequency, duration, type = 'sine', volume = 0.1) {
        if (!this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.type = type;

        gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    // Weather widget system
    initializeWeatherWidget() {
        this.updateWeatherData();
        setInterval(() => {
            this.updateWeatherData();
        }, 600000); // Update every 10 minutes
    }

    updateWeatherData() {
        // Simulate weather data
        const conditions = [
            { icon: 'fas fa-sun', temp: 22, desc: 'Sunny', impact: '+5% range' },
            { icon: 'fas fa-cloud-sun', temp: 18, desc: 'Partly Cloudy', impact: '+2% range' },
            { icon: 'fas fa-cloud-rain', temp: 15, desc: 'Light Rain', impact: '-3% range' },
            { icon: 'fas fa-snowflake', temp: -2, desc: 'Snow', impact: '-12% range' },
        ];

        const condition = conditions[Math.floor(Math.random() * conditions.length)];
        
        const weatherIcon = document.getElementById('weatherIcon');
        const temperature = document.getElementById('temperature');
        const weatherDesc = document.getElementById('weatherDesc');
        const efficiencyImpact = document.getElementById('efficiencyImpact');

        if (weatherIcon) weatherIcon.className = condition.icon;
        if (temperature) temperature.textContent = `${condition.temp}°C`;
        if (weatherDesc) weatherDesc.textContent = condition.desc;
        if (efficiencyImpact) efficiencyImpact.textContent = condition.impact;
    }

    // Neural processes (background tasks)
    startNeuralProcesses() {
        // Simulate AI processing
        setInterval(() => {
            this.processNeuralData();
        }, 30000);

        // Auto-optimize routes
        setInterval(() => {
            this.optimizeRoutes();
        }, 120000);

        // Check for maintenance alerts
        setInterval(() => {
            this.checkMaintenanceAlerts();
        }, 300000);
    }

    processNeuralData() {
        // Simulate neural network processing
        const insights = [
            'Optimal charging window detected: 2:00-4:00 AM',
            'Route efficiency improved by 3%',
            'New fast-charging station detected nearby',
            'Energy consumption pattern optimized',
            'Predictive maintenance reminder scheduled'
        ];

        if (Math.random() > 0.7) {
            const insight = insights[Math.floor(Math.random() * insights.length)];
            this.showNotification('Neural Insight', insight, 'info');
        }
    }

    optimizeRoutes() {
        const routeDistance = document.getElementById('routeDistance');
        const routeTime = document.getElementById('routeTime');

        if (routeDistance && routeTime) {
            const newDistance = Math.floor(Math.random() * 100) + 800;
            const newTime = (newDistance / 300).toFixed(1);

            this.animateValueUpdate('routeDistance', `${newDistance}km`);
            this.animateValueUpdate('routeTime', `${newTime}h`);
        }
    }

    checkMaintenanceAlerts() {
        if (Math.random() > 0.9) {
            this.showNotification('Maintenance Alert', 'Tire pressure check recommended', 'warning');
        }
    }

    // Utility functions
    animateValueUpdate(elementOrId, newValue) {
        const element = typeof elementOrId === 'string' 
            ? document.getElementById(elementOrId) 
            : elementOrId;

        if (!element) return;

        element.style.transform = 'scale(1.1)';
        element.style.color = '#00ffff';
        
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'scale(1)';
            element.style.color = '';
        }, 150);
    }

    animateButton(buttonId, newIcon) {
        const button = document.getElementById(buttonId);
        if (!button) return;

        button.style.transform = 'scale(0.9)';
        setTimeout(() => {
            button.querySelector('i').className = newIcon;
            button.style.transform = 'scale(1)';
        }, 150);
    }

    createRippleEffect(element, event) {
        const rect = element.getBoundingClientRect();
        const ripple = document.createElement('div');
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
            z-index: 1000;
        `;

        element.style.position = 'relative';
        element.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }

    createSuccessParticles(element) {
        const rect = element.getBoundingClientRect();
        
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            const angle = (i * 30) * Math.PI / 180;
            const velocity = Math.random() * 100 + 50;
            
            particle.style.cssText = `
                position: fixed;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
                width: 4px;
                height: 4px;
                background: #00ff00;
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                animation: successParticle${i} 1.5s ease-out forwards;
            `;

            document.body.appendChild(particle);
            
            // Create unique animation for each particle
            const keyframes = `
                @keyframes successParticle${i} {
                    0% { 
                        transform: translate(0, 0) scale(1); 
                        opacity: 1; 
                    }
                    100% { 
                        transform: translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0); 
                        opacity: 0; 
                    }
                }
            `;

            const style = document.createElement('style');
            style.textContent = keyframes;
            document.head.appendChild(style);

            setTimeout(() => {
                particle.remove();
                style.remove();
            }, 1500);
        }
    }

    showNotification(title, message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `neural-notification ${type}`;
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas ${this.getNotificationIcon(type)}"></i>
            </div>
            <div class="notification-content">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 5, 16, 0.95);
            border: 1px solid ${this.getNotificationColor(type)};
            border-radius: 15px;
            padding: 20px;
            max-width: 300px;
            z-index: 10000;
            animation: notificationSlideIn 0.5s ease-out, notificationSlideOut 0.5s ease-in 4s forwards;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 40px ${this.getNotificationColor(type)}33;
            display: flex;
            align-items: center;
            gap: 15px;
        `;

        document.body.appendChild(notification);

        // Close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });

        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.remove();
            }
        }, 5000);

        // Update notification badge
        this.updateNotificationBadge();
    }

    getNotificationIcon(type) {
        const icons = {
            'success': 'fa-check-circle',
            'error': 'fa-exclamation-circle',
            'warning': 'fa-exclamation-triangle',
            'info': 'fa-info-circle'
        };
        return icons[type] || icons.info;
    }

    getNotificationColor(type) {
        const colors = {
            'success': '#00ff00',
            'error': '#ff6b6b',
            'warning': '#ffaa00',
            'info': '#00ffff'
        };
        return colors[type] || colors.info;
    }

    updateNotificationBadge() {
        const badge = document.getElementById('notificationBadge');
        if (badge) {
            const currentCount = parseInt(badge.textContent) || 0;
            badge.textContent = currentCount + 1;
            badge.style.animation = 'badgePulse 0.5s ease-in-out';
        }
    }

    clearAllNotifications() {
        const badge = document.getElementById('notificationBadge');
        if (badge) {
            badge.textContent = '0';
            badge.style.display = 'none';
        }

        const dropdown = document.getElementById('notificationDropdown');
        if (dropdown) {
            dropdown.classList.remove('show');
        }

        this.showNotification('Notifications Cleared', 'All notifications have been cleared', 'success');
    }

    performNeuralSearch(query) {
        if (query.length < 2) return;

        // Simulate search results
        const searchableElements = document.querySelectorAll('[data-searchable]');
        searchableElements.forEach(element => {
            const text = element.textContent.toLowerCase();
            const isMatch = text.includes(query.toLowerCase());
            
            element.style.opacity = isMatch ? '1' : '0.3';
            element.style.transform = isMatch ? 'scale(1)' : 'scale(0.95)';
        });

        // Show search feedback
        if (query.length > 3) {
            this.showNotification('Neural Search', `Found ${Math.floor(Math.random() * 10) + 1} results for "${query}"`, 'info');
        }
    }

    showBatteryStatus() {
        const powerLevel = document.getElementById('powerLevel');
        const batteryPercent = powerLevel ? parseInt(powerLevel.textContent) : 87;
        
        let statusMessage = '';
        if (batteryPercent > 80) {
            statusMessage = 'Battery level optimal';
        } else if (batteryPercent > 50) {
            statusMessage = 'Battery level good';
        } else if (batteryPercent > 20) {
            statusMessage = 'Consider charging soon';
        } else {
            statusMessage = 'Low battery - charge immediately';
        }

        this.showNotification('Battery Status', `${batteryPercent}% - ${statusMessage}`, 
            batteryPercent > 20 ? 'success' : 'warning');
    }
}

// Add custom CSS animations
const customStyles = document.createElement('style');
customStyles.textContent = `
    @keyframes neuralFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-20px) rotate(90deg); }
        50% { transform: translateY(-40px) rotate(180deg); }
        75% { transform: translateY(-20px) rotate(270deg); }
    }

    @keyframes wheelSpin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    @keyframes wheelGlow {
        0%, 100% { box-shadow: 0 0 15px rgba(0, 255, 255, 0.5); }
        50% { box-shadow: 0 0 25px rgba(255, 20, 147, 0.8); }
    }

    @keyframes rippleEffect {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
    }

    @keyframes portFlash {
        0%, 100% { background: rgba(0, 255, 0, 0.1); }
        50% { background: rgba(0, 255, 0, 0.3); }
    }

    @keyframes notificationSlideIn {
        0% { transform: translateX(100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
    }

    @keyframes notificationSlideOut {
        0% { transform: translateX(0); opacity: 1; }
        100% { transform: translateX(100%); opacity: 0; }
    }

    @keyframes badgePulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
    }

    /* Additional UI enhancements */
    .search-container.focused .search-glow {
        opacity: 1;
        animation: searchGlow 2s ease-in-out infinite;
    }

    @keyframes searchGlow {
        0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); }
        50% { box-shadow: 0 0 30px rgba(255, 20, 147, 0.5); }
    }

    .search-icon {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #64748b;
        z-index: 2;
    }

    .cyber-search {
        padding-left: 45px;
    }

    /* Enhanced notification styles */
    .notification-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        width: 350px;
        background: rgba(0, 5, 16, 0.95);
        border: 1px solid rgba(0, 255, 255, 0.3);
        border-radius: 15px;
        backdrop-filter: blur(20px);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        z-index: 1000;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease;
        pointer-events: none;
    }

    .notification-dropdown.show {
        opacity: 1;
        transform: translateY(0);
        pointer-events: all;
    }

    .notification-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .notification-header h4 {
        color: #ffffff;
        font-family: 'Orbitron', monospace;
        margin: 0;
    }

    .clear-all-btn {
        background: none;
        border: 1px solid rgba(0, 255, 255, 0.3);
        color: #00ffff;
        padding: 5px 10px;
        border-radius: 8px;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .clear-all-btn:hover {
        background: rgba(0, 255, 255, 0.1);
    }

    .notification-item {
        display: flex;
        align-items: flex-start;
        gap: 15px;
        padding: 15px 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        transition: all 0.3s ease;
    }

    .notification-item:hover {
        background: rgba(255, 255, 255, 0.02);
    }

    .notification-icon-small {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        flex-shrink: 0;
    }

    .notification-icon-small.success {
        background: rgba(0, 255, 0, 0.2);
        color: #00ff00;
    }

    .notification-icon-small.warning {
        background: rgba(255, 170, 0, 0.2);
        color: #ffaa00;
    }

    .notification-icon-small.info {
        background: rgba(0, 255, 255, 0.2);
        color: #00ffff;
    }

    .notification-content h5 {
        color: #ffffff;
        font-size: 14px;
        margin: 0 0 5px 0;
    }

    .notification-content p {
        color: #64748b;
        font-size: 12px;
        margin: 0 0 5px 0;
    }

    .notification-time {
        color: #64748b;
        font-size: 11px;
    }

    /* Enhanced vehicle controls */
    .vehicle-controls {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-top: 20px;
    }

    .control-btn {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #ffffff;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    .control-btn:hover {
        background: rgba(0, 255, 255, 0.1);
        border-color: rgba(0, 255, 255, 0.3);
        transform: translateY(-2px);
    }

    .control-btn i {
        font-size: 16px;
        color: #00ffff;
    }

    /* Status indicators */
    .vehicle-status-indicators {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin: 15px 0;
    }

    .status-indicator {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 8px 12px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        font-size: 11px;
        color: #64748b;
        transition: all 0.3s ease;
    }

    .status-indicator.connected {
        border-color: rgba(0, 255, 0, 0.3);
        color: #00ff00;
    }

    .status-indicator.charging {
        border-color: rgba(255, 170, 0, 0.3);
        color: #ffaa00;
    }

    .status-indicator.idle {
        border-color: rgba(0, 255, 255, 0.3);
        color: #00ffff;
    }

    .status-indicator i {
        font-size: 12px;
    }

    /* Enhanced energy efficiency bar */
    .energy-efficiency {
        margin-top: 15px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 15px;
    }

    .efficiency-bar {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .efficiency-label {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #64748b;
        font-size: 12px;
        font-weight: 600;
    }

    .efficiency-label i {
        color: #00ff00;
    }

    .efficiency-progress {
        position: relative;
        height: 8px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        overflow: hidden;
    }

    .efficiency-fill {
        height: 100%;
        background: linear-gradient(90deg, #00ff00, #32cd32);
        border-radius: 4px;
        transition: width 0.8s ease;
        position: relative;
    }

    .efficiency-fill::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        animation: efficiencyShimmer 2s ease-in-out infinite;
    }

    .efficiency-value {
        position: absolute;
        right: 0;
        top: -25px;
        font-family: 'Orbitron', monospace;
        font-size: 12px;
        font-weight: 600;
        color: #00ffff;
    }

    @keyframes efficiencyShimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }

    /* Route optimizer enhancements */
    .nav-controls {
        display: flex;
        gap: 5px;
    }

    .nav-control-btn {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #64748b;
        width: 30px;
        height: 30px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
    }

    .nav-control-btn:hover {
        background: rgba(0, 255, 255, 0.1);
        border-color: rgba(0, 255, 255, 0.3);
        color: #00ffff;
    }

    .optimize-route-btn {
        width: 100%;
        background: linear-gradient(135deg, #8a2be2, #ff1493);
        border: none;
        color: #ffffff;
        padding: 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
        font-family: 'Orbitron', monospace;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .optimize-route-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(138, 43, 226, 0.3);
    }

    /* Node labels */
    .node {
        position: relative;
    }

    .node-label {
        position: absolute;
        top: 25px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 8px;
        color: #64748b;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        white-space: nowrap;
    }

    /* Analytics insights */
    .analytics-insights {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .insight-item {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: #64748b;
        background: rgba(255, 255, 255, 0.02);
        padding: 10px;
        border-radius: 8px;
        border-left: 3px solid #00ffff;
    }

    .insight-item i {
        color: #00ffff;
        font-size: 14px;
    }

    .insight-item strong {
        color: #ffffff;
    }

    /* Station features */
    .station-features {
        display: flex;
        gap: 5px;
        margin-top: 5px;
    }

    .feature-tag {
        display: flex;
        align-items: center;
        gap: 3px;
        background: rgba(0, 255, 255, 0.1);
        border: 1px solid rgba(0, 255, 255, 0.2);
        border-radius: 10px;
        padding: 2px 6px;
        font-size: 9px;
        color: #00ffff;
    }

    .feature-tag i {
        font-size: 8px;
    }

    /* Network summary */
    .network-summary {
        display: flex;
        justify-content: space-between;
        gap: 15px;
        margin-top: 20px;
        padding: 15px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
    }

    .summary-item {
        text-align: center;
        flex: 1;
    }

    .summary-value {
        display: block;
        font-family: 'Orbitron', monospace;
        font-size: 18px;
        font-weight: 700;
        color: #00ffff;
        margin-bottom: 5px;
    }

    .summary-label {
        font-size: 10px;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    /* Quick actions panel */
    .quick-actions-panel {
        position: fixed;
        right: 30px;
        bottom: 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 1000;
    }

    .quick-action-btn {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #00ffff, #ff1493);
        border: none;
        color: #000000;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        box-shadow: 0 5px 20px rgba(0, 255, 255, 0.3);
        position: relative;
        overflow: hidden;
    }

    .quick-action-btn::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transform: rotate(45deg);
        transition: all 0.5s ease;
        opacity: 0;
    }

    .quick-action-btn:hover {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 0 10px 30px rgba(0, 255, 255, 0.5);
    }

    .quick-action-btn:hover::before {
        opacity: 1;
        animation: quickActionShimmer 0.6s ease-out;
    }

    @keyframes quickActionShimmer {
        0% { transform: translateX(-100%) rotate(45deg); }
        100% { transform: translateX(100%) rotate(45deg); }
    }

    /* Weather widget */
    .weather-widget {
        position: fixed;
        top: 120px;
        right: 30px;
        background: rgba(0, 5, 16, 0.8);
        border: 1px solid rgba(0, 255, 255, 0.3);
        border-radius: 15px;
        padding: 15px;
        backdrop-filter: blur(20px);
        min-width: 150px;
        z-index: 999;
    }

    .weather-widget .weather-icon {
        text-align: center;
        margin-bottom: 10px;
    }

    .weather-widget .weather-icon i {
        font-size: 24px;
        color: #ffaa00;
    }

    .weather-info {
        text-align: center;
    }

    .temperature {
        font-family: 'Orbitron', monospace;
        font-size: 20px;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 5px;
    }

    .weather-desc {
        font-size: 12px;
        color: #64748b;
        margin-bottom: 10px;
    }

    .efficiency-impact {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-size: 11px;
        color: #00ff00;
        background: rgba(0, 255, 0, 0.1);
        border: 1px solid rgba(0, 255, 0, 0.2);
        border-radius: 10px;
        padding: 5px 8px;
    }

    .efficiency-impact i {
        font-size: 10px;
    }

    /* AI tooltip */
    .ai-assistant {
        position: relative;
    }

    .ai-tooltip {
        position: absolute;
        bottom: -35px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.9);
        color: #ffffff;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 11px;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
    }

    .ai-assistant:hover .ai-tooltip {
        opacity: 1;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .quick-actions-panel {
            right: 15px;
            bottom: 15px;
        }

        .quick-action-btn {
            width: 45px;
            height: 45px;
            font-size: 16px;
        }

        .weather-widget {
            top: 80px;
            right: 15px;
            min-width: 120px;
            padding: 10px;
        }

        .notification-dropdown {
            width: calc(100vw - 40px);
            right: -50px;
        }

        .vehicle-controls {
            flex-wrap: wrap;
        }

        .control-btn {
            min-width: 80px;
        }
    }
`;
document.head.appendChild(customStyles);

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.electraDashboard = new ElectraNeuralDashboard();
});

// Enhanced page transition effects
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-out';
});

// Initialize page with enhanced fade-in
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        
        // Trigger welcome sequence
        setTimeout(() => {
            if (window.electraDashboard) {
                window.electraDashboard.showNotification(
                    'Neural System Online', 
                    'Welcome to Electra v2.0 - All systems operational', 
                    'success'
                );
            }
        }, 1000);
    }, 100);
});

// Advanced error handling with neural feedback
window.addEventListener('error', (e) => {
    console.error('Neural System Error:', e);
    
    if (window.electraDashboard) {
        window.electraDashboard.showNotification(
            'System Alert', 
            'Minor neural fluctuation detected - auto-correcting', 
            'warning'
        );
    }
});

// Performance monitoring and optimization
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            startTime: performance.now(),
            frameCount: 0,
            lastFrameTime: performance.now()
        };
        
        this.startMonitoring();
    }
    
    startMonitoring() {
        this.monitorFrameRate();
        this.monitorMemoryUsage();
        this.optimizePerformance();
    }
    
    monitorFrameRate() {
        const checkFrame = () => {
            const currentTime = performance.now();
            this.metrics.frameCount++;
            
            const deltaTime = currentTime - this.metrics.lastFrameTime;
            if (deltaTime > 16.67) { // Below 60fps
                this.handleLowPerformance();
            }
            
            this.metrics.lastFrameTime = currentTime;
            requestAnimationFrame(checkFrame);
        };
        
        requestAnimationFrame(checkFrame);
    }
    
    monitorMemoryUsage() {
        if (performance.memory) {
            setInterval(() => {
                const memoryInfo = performance.memory;
                const memoryUsage = memoryInfo.usedJSHeapSize / memoryInfo.totalJSHeapSize;
                
                if (memoryUsage > 0.8) {
                    this.optimizeMemory();
                }
            }, 30000);
        }
    }
    
    handleLowPerformance() {
        // Reduce particle count
        const particles = document.querySelectorAll('.neural-particle');
        if (particles.length > 15) {
            for (let i = 15; i < particles.length; i++) {
                particles[i].remove();
            }
        }
        
        // Disable some animations
        document.body.classList.add('performance-mode');
    }
    
    optimizeMemory() {
        // Clear unnecessary elements
        const notifications = document.querySelectorAll('.neural-notification');
        notifications.forEach((notification, index) => {
            if (index < notifications.length - 5) {
                notification.remove();
            }
        });
        
        console.log('Memory optimization performed');
    }
    
    optimizePerformance() {
        // Use intersection observer for animations
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            });
            
            // Observe animated elements
            document.querySelectorAll('.card, .stat-module, .analytics-item').forEach(el => {
                observer.observe(el);
            });
        }
    }
}

// Initialize performance monitor
const performanceMonitor = new PerformanceMonitor();

// Advanced keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + combinations
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case 's':
                e.preventDefault();
                if (window.electraDashboard) {
                    window.electraDashboard.findNearestStation();
                }
                break;
            case 'e':
                e.preventDefault();
                if (window.electraDashboard) {
                    window.electraDashboard.findEmergencyCharge();
                }
                break;
            case 'v':
                e.preventDefault();
                if (window.electraDashboard) {
                    window.electraDashboard.activateVoiceCommands();
                }
                break;
        }
    }
    
    // Function keys
    switch (e.key) {
        case 'F1':
            e.preventDefault();
            if (window.electraDashboard) {
                window.electraDashboard.showNotification(
                    'Help System', 
                    'Ctrl+S: Find Station | Ctrl+E: Emergency | Ctrl+V: Voice', 
                    'info'
                );
            }
            break;
            
        case 'Escape':
            // Close any open dropdowns
            document.querySelectorAll('.notification-dropdown.show').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
            break;
    }
});

// Enhanced touch/mobile interactions
if ('ontouchstart' in window) {
    // Add touch-specific enhancements
    const touchElements = document.querySelectorAll('.nav-item, .sync-btn, .control-btn');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', (e) => {
            element.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', (e) => {
            element.style.transform = 'scale(1)';
        });
    });
    
    // Add swipe gestures
    let touchStartX, touchStartY;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        if (!touchStartX || !touchStartY) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Swipe right to show notifications
        if (deltaX > 100 && Math.abs(deltaY) < 50) {
            const notificationDropdown = document.getElementById('notificationDropdown');
            if (notificationDropdown) {
                notificationDropdown.classList.add('show');
            }
        }
        
        // Reset touch coordinates
        touchStartX = null;
        touchStartY = null;
    });
}

// Advanced data persistence
class DataManager {
    constructor() {
        this.storageKey = 'electra-neural-data';
        this.loadUserData();
    }
    
    saveUserData(data) {
        try {
            const existingData = this.getUserData();
            const mergedData = { ...existingData, ...data, lastUpdated: Date.now() };
            localStorage.setItem(this.storageKey, JSON.stringify(mergedData));
        } catch (e) {
            console.warn('Could not save user data:', e);
        }
    }
    
    getUserData() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : {};
        } catch (e) {
            console.warn('Could not load user data:', e);
            return {};
        }
    }
    
    loadUserData() {
        const userData = this.getUserData();
        
        // Apply saved preferences
        if (userData.selectedVehicle) {
            const vehicleSelector = document.getElementById('vehicleSelector');
            if (vehicleSelector) {
                vehicleSelector.value = userData.selectedVehicle;
            }
        }
        
        if (userData.energyLevel) {
            const energyElement = document.getElementById('userEnergyLevel');
            if (energyElement) {
                energyElement.textContent = userData.energyLevel;
            }
        }
    }
    
    exportData() {
        const userData = this.getUserData();
        const dataBlob = new Blob([JSON.stringify(userData, null, 2)], {
            type: 'application/json'
        });
        
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `electra-data-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
    }
}

// Initialize data manager
const dataManager = new DataManager();

// Auto-save user interactions
setInterval(() => {
    const currentData = {
        selectedVehicle: document.getElementById('vehicleSelector')?.value,
        energyLevel: document.getElementById('userEnergyLevel')?.textContent,
        lastActiveTab: document.querySelector('.nav-item.active')?.getAttribute('data-page'),
        sessionTime: Date.now()
    };
    
    dataManager.saveUserData(currentData);
}, 30000); // Save every 30 seconds

console.log('🚀 Electra Neural Dashboard v2.0 - System Initialized');
console.log('⚡ Enhanced features active: Voice Commands, AI Optimization, Real-time Sync');
console.log('🤖 Neural processes online - Welcome to the future of EV charging');

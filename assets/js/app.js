/**
 * Pulkit Rai - Cybersecurity Engineer Portfolio Engine
 * Smooth animations, interactive cyber terminal, spotlight hover & telemetry simulator.
 */

document.addEventListener('DOMContentLoaded', () => {
  initCardSpotlight();
  initCyberTerminal();
  initProjectFilters();
  initClipboardToast();
  initScrollSpy();
});

// 1. Mouse Spotlight Tracker for Cards (OpenBot.run style)
function initCardSpotlight() {
  const cards = document.querySelectorAll('.project-card, .metric-card, .skill-box');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// 2. Interactive Cyber Terminal Simulator
const terminalScenarios = {
  live: [
    { text: '[22:31:04] INFO  [IngestEngine] Connected to Microsoft Sentinel (Workspace: Sentinel-SOC-EastUS)', type: 't-comment' },
    { text: '[22:31:05] WARN  [Detection] Correlation match: Privileged role elevation outside PIM window', type: 't-warn' },
    { text: '[22:31:06] INFO  [Triage] Target UPN: sec-admin@domain.com | Assigned Role: Global Administrator', type: 't-prompt' },
    { text: '[22:31:07] INFO  [SOAR] Triggered playbook: LogicApp-AutoIsolate-Identity', type: 't-cmd' },
    { text: '[22:31:08] OK    [Containment] Revoked active tokens & notified SOC Tier-2 channel via webhook', type: 't-success' }
  ],
  kql: [
    { text: '// Microsoft Sentinel KQL: Detect Anonymous Storage Access', type: 't-comment' },
    { text: 'AzureActivity', type: 't-keyword' },
    { text: '| where OperationNameValue has "MICROSOFT.STORAGE/STORAGEACCOUNTS/WRITE"', type: 't-cmd' },
    { text: '| extend AllowPublicAccess = parse_json(Properties).requestbody.properties.allowBlobPublicAccess', type: 't-cmd' },
    { text: '| where AllowPublicAccess =~ "true"', type: 't-warn' },
    { text: '| project TimeGenerated, Caller, CallerIpAddress, Resource', type: 't-cmd' },
    { text: '// Status: 0 Critical Alerts in last 24h. Baseline enforcement Active.', type: 't-success' }
  ],
  mitre: [
    { text: '=== MITRE ATT&CK Matrix Cloud Mapping ===', type: 't-comment' },
    { text: '[T1078.004] Valid Accounts: Cloud Accounts -> Covered (Azure AD / IAM AuditLogs)', type: 't-success' },
    { text: '[T1098.003] Account Manipulation: Additional Cloud Roles -> Covered (PIM Alerts)', type: 't-success' },
    { text: '[T1530]     Data from Cloud Storage Object -> Covered (S3 & Blob telemetry)', type: 't-success' },
    { text: '[T1059.001] Command & Scripting: PowerShell RunCommand -> Covered (Compute API monitoring)', type: 't-success' }
  ]
};

function initCyberTerminal() {
  const terminalBody = document.getElementById('terminal-content');
  const tabBtns = document.querySelectorAll('.terminal-tab-btn');
  if (!terminalBody) return;

  function renderScenario(scenarioKey) {
    const lines = terminalScenarios[scenarioKey] || terminalScenarios.live;
    terminalBody.innerHTML = '';

    lines.forEach((line, index) => {
      setTimeout(() => {
        const div = document.createElement('div');
        div.className = line.type || '';
        div.textContent = line.text;
        terminalBody.appendChild(div);
      }, index * 120);
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderScenario(btn.dataset.tab);
    });
  });

  // Initial render
  renderScenario('live');
}

// 3. Project Filter Tabs
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

// 4. Clipboard Copy & Toast Notice
function initClipboardToast() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('copy-toast');
  const email = 'pulkitonwork@gmail.com';

  if (!copyBtn || !toast) return;

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }).catch(() => {
      alert(`Contact Pulkit Rai: ${email}`);
    });
  });
}

// 5. ScrollSpy
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

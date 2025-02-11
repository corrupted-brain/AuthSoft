export interface Software {
  type: string;
  name: string;
  purpose: string;
  licenseType: string;
  link: string;
  remarks: string;
}

// Mock data - replace this with your actual data
export const softwareList: Software[] = [

  {
    "type": "AWS Related",
    "name": "WorkSpaces",
    "purpose": "Fully managed desktop computing service in the cloud .",
    "licenseType": "Free",
    "link": "https://clients.amazonworkspaces.com/",
    "remarks": "#227325"
  },
  {
    "type": "AWS Related",
    "name": "memcached",
    "purpose": "Memory object caching systems",
    "licenseType": "Free",
    "link": "https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-memcached-on-ubuntu-16-04",
    "remarks": "#246830"
  },
  {
    "type": "Basic CentOS Software",
    "name": "httpd",
    "purpose": "Apache HTTP Server",
    "licenseType": "Free",
    "link": "https://httpd.apache.org/download.cgi",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "cvs.x86_64",
    "purpose": "Concurrent Versions System",
    "licenseType": "Free",
    "link": "http://cvs.nongnu.org/",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "freeradius.x86_64",
    "purpose": "High-performance and highly configurable free RADIUS server",
    "licenseType": "Free",
    "link": "https://freeradius.org/",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "freerdp.x86_64",
    "purpose": "Remote Desktop Protocol client",
    "licenseType": "Free",
    "link": "http://www.freerdp.com/",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "graphviz.x86_64",
    "purpose": "Graph Visualization Tools",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/graphviz-2.30.1-21.el7.x86_64.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "httpd.x86_64",
    "purpose": "Apache HTTP Server",
    "licenseType": "Free",
    "link": "https://httpd.apache.org/docs/2.4/platform/rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "madan-fonts.noarch",
    "purpose": "Font for Nepali language",
    "licenseType": "Free",
    "link": "https://pkgs.org/download/madan-fonts",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "mlocate.x86_64",
    "purpose": "An utility for finding files by name",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/mlocate-0.26-8.el7.x86_64.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "mtr.x86_64",
    "purpose": "A network diagnostic tool",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/mtr-0.85-7.el7.x86_64.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "MySQL-python.x86_64",
    "purpose": "An interface to MySQL",
    "licenseType": "Free",
    "link": "http://rpmfind.net/linux/RPM/MySQL-python.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "mythes-en.noarch",
    "purpose": "English thesaurus",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/6/centos-x86_64/mythes-en-3.0-6.el6.noarch.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "net-snmp.x86_64",
    "purpose": "A collection of SNMP protocol tools and libraries",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/net-snmp-5.7.2-37.el7.x86_64.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "rrdtool.x86_64",
    "purpose": "Round Robin Database Tool to store and display time-series data",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/rrdtool-1.4.8-9.el7.x86_64.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "rsyslog.x86_64",
    "purpose": "Enhanced system logging and kernel message trapping daemon",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/rsyslog-8.24.0-34.el7.x86_64.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "samba-common.noarch",
    "purpose": "Files used by both Samba servers and clients",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/samba-common-4.8.3-4.el7.noarch.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "subversion.x86_64",
    "purpose": "A Modern Concurrent Version Control System",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/subversion-1.7.14-14.el7.x86_64.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "dpkg.x86_64",
    "purpose": "Package maintenance system for Debian Linux",
    "licenseType": "Free",
    "link": "https://pkgs.org/download/dpkg",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "fping.x86_64",
    "purpose": "Scriptable, parallelized ping-like utility",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/repoforge-x86_64/fping-3.10-1.el7.rf.x86_64.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "htop.x86_64",
    "purpose": "Interactive process viewer",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/epel-x86_64/htop-2.2.0-3.el7.x86_64.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "jwhois.x86_64",
    "purpose": "Internet whois/nicname client",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/epel-x86_64/jwhois-4.0-45.el7.x86_64.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "mailgraph.noarch",
    "purpose": "A RRDtool frontend for Mail statistics",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/epel-x86_64/mailgraph-1.14-31.el7.noarch.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "mcrypt.x86_64",
    "purpose": "Replacement for crypt()",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/epel-x86_64/mcrypt-2.6.8-11.el7.x86_64.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic CentOS software",
    "name": "smokeping.noarch",
    "purpose": "Latency Logging and Graphing System",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/ghettoforge-x86_64/smokeping-2.6.11-1.gf.el7.noarch.rpm.html",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "SpeechSynthesisServer",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "TV",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Videos",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Music",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "DVD Player",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Siri",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Find My",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "QuickTime Player",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Chess",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Photo Booth",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Notes",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Image Capture",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "iBooks",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Preview",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Podcasts",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Dashboard",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "TextEdit",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Mail",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Safari",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Dictionary",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Contacts",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Time Machine",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Font Book",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "NativeMessagingHost",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "FaceTime",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "TextInputSwitcher",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Maps",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Mission Control",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Stickies",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Photos",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Messages",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Calculator",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "iTunes",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Launchpad",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Reminders",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "App Store",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Automator",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Calendar",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "System Preferences",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "db",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Gatekeeper Configuration Data",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "MRTConfigData",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.GarageBand_AppStore.bom",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.GarageBand_AppStore.plist",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.Keynote7.bom",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.Keynote7.plist",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.Numbers4.bom",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.Numbers4.plist",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.Pages6.bom",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.Pages6.plist",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.iMovie_AppStore.bom",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.iMovie_AppStore.plist",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "ABAssistantService",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "About This Mac",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "AccessibilityVisualsAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "AinuIM",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "AirDrop",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "AirPlayUIAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "AirScanLegacyDiscovery",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "AirScanScanner",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "All My Files",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "AOSHeartbeat",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "AOSPushRelay",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "AskPermissionUI",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Assistive Control",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "AutoPartition",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "AVB Audio Configuration",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Calibration Assistant",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Canon IJScanner4",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Canon IJScanner6",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "CMFSyncAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "commandFilter",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Computer",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "ControlStrip",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "DFRHUD",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Dictation",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Digital Color Meter",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "DiscHelper",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Dwell Control",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "EmojiFunctionRowIM",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "EPFaxAutoSetupTool",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "EscrowSecurityAlert",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "ESET Endpoint Security",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Family",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Fax Receive Monitor",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "FAX Utility",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "FolderActionsDispatcher",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "FollowUpUI",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Games",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "GarageBand",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "HindiIM",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "iCloud",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "iCloud Drive",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "iCloudUserNotificationsd",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "identityservicesd",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "IDSRemoteURLConnectionAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "IMAutomaticHistoryDeletionAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "imavagent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "iMovie",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "IMTransferAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Install Command Line Developer Tools",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Install in Progress",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Install macOS Mojave",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Installer Progress",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "JapaneseIM",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Keychain Circle Notification",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Keynote",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "LaterAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "MRT",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "nbagent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Network",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Notification Center",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Notify",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "NowPlayingTouchUI",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "NowPlayingWidgetContainer",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Numbers",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "OSDUIHelper",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Pages",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Pass Viewer",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Photo Library Migration Utility",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "PIPAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "PowerChime",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Quick Look Simulator",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "rastertoepfax",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Recents",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "ReportPanic",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "ScriptMonitor",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "soagent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "SocialPushAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Speech Downloader",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "SpeechService.service",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Spotlight.service",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "SSMenuAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Stocks",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Storage Management",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "storeuid",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Summary Service",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "System Image Utility",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "ThermalTrap",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "universalAccessAuthWarn",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "UniversalAccessControl",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "UniversalAccessHUD",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Weather",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Widget Simulator",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "wxrc-3",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "WiFiAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Wireless Diagnostics",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "CheatSheet",
    "purpose": "Mac keyboard shortcut",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Wunderlist",
    "purpose": "To-do list software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Skitch",
    "purpose": "Screen shot",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "UIKitSystem",
    "purpose": "Construct and manage a graphical, event-driven user interface",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Home",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Basic Mac Software",
    "name": "Books",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": " "
  },
  {
    "type": "Accounting",
    "name": "Tally",
    "purpose": "ERP system for accounting,inventory and data integrity.",
    "licenseType": "Licensed",
    "link": "https://tallysolutions.com/ ",
    "remarks": " "
  },
  {
    "type": "Accounting",
    "name": "Deerwalk Salary Sheet",
    "purpose": "Deerwalk's product for monthly salary sheet's auto email ",
    "licenseType": "Licensed",
    "link": "Deerwalk",
    "remarks": " "
  },
  {
    "type": "Anti Virus",
    "name": "ESET Endpoint Antivirus",
    "purpose": "Antivirus and internet security solutions ",
    "licenseType": "Licensed",
    "link": "https://www.eset.com",
    "remarks": "We donot use ESET anymore - should be removed after its decomed fully"
  },
  {
    "type": "Anti Virus",
    "name": "ESET Management Agent",
    "purpose": "Facilitates communications between client and ERA Server.",
    "licenseType": "Licensed",
    "link": "https://www.eset.com",
    "remarks": " "
  },
  {
    "type": "Anti Virus",
    "name": "lsb-esets.x86_64",
    "purpose": "Antivirus and internet security solutions for CentOS",
    "licenseType": "Licensed",
    "link": "https://www.eset.com",
    "remarks": " "
  },
  {
    "type": "API",
    "name": "WIMGAPI",
    "purpose": "Imaging API for Windows",
    "licenseType": "Free",
    "link": "https://msdn.microsoft.com/en-us/library/windows/desktop/dd851933.aspx",
    "remarks": "All MS sites and domains should be on whitelist"
  },
  {
    "type": "API ",
    "name": "POSTMAN",
    "purpose": "API testing tool ",
    "licenseType": "Free",
    "link": "https://www.getpostman.com/apps",
    "remarks": " "
  },
  {
    "type": "API ",
    "name": "xsltproc",
    "purpose": "Command line tool for applying XSLT stylesheets to XML documents",
    "licenseType": "Free",
    "link": "http://www.sagehill.net/docbookxsl/InstallingAProcessor.html",
    "remarks": " "
  },
  {
    "type": "API ",
    "name": "Docker",
    "purpose": "Deployment Tool",
    "licenseType": "Free",
    "link": "https://docs.docker.com/docker-for-mac/install/",
    "remarks": " "
  },
  {
    "type": "API ",
    "name": "Xcode",
    "purpose": "Developer Tool",
    "licenseType": "Free",
    "link": "https://xcode-mac.en.softonic.com/mac",
    "remarks": " "
  },
  {
    "type": "API ",
    "name": "VirtualBox",
    "purpose": "Component of Docker",
    "licenseType": "Free",
    "link": "https://docs.docker.com/docker-for-mac/install/",
    "remarks": " "
  },
  {
    "type": "API ",
    "name": "Application Loader",
    "purpose": "Component of Xcode",
    "licenseType": "Free",
    "link": "https://xcode-mac.en.softonic.com/mac",
    "remarks": " "
  },
  {
    "type": "API ",
    "name": "Accessibility Inspector",
    "purpose": "Component of Xcode",
    "licenseType": "Free",
    "link": "https://xcode-mac.en.softonic.com/mac",
    "remarks": "macOS"
  },
  {
    "type": "API ",
    "name": "Simulator",
    "purpose": "Component of Xcode",
    "licenseType": "Free",
    "link": "https://xcode-mac.en.softonic.com/mac",
    "remarks": " "
  },
  {
    "type": "API ",
    "name": "Insomnia",
    "purpose": "Rest client required for development. Alternative to PostMan.",
    "licenseType": "Free",
    "link": "https://insomnia.rest/",
    "remarks": " "
  },
  {
    "type": "API ",
    "name": "FileMerge",
    "purpose": "Component of Xcode",
    "licenseType": "Free",
    "link": "https://apple.stackexchange.com/questions/42345/where-can-i-download-filemerge-the-app-for-comparing-two-tools-and-merging-the",
    "remarks": " "
  },
  {
    "type": "AWS Related",
    "name": "AWS Schema Conversion Tool",
    "purpose": "Needed for aurora conversion",
    "licenseType": "Free",
    "link": "https://aws.amazon.com/documentation/SchemaConversionTool/",
    "remarks": " "
  },
  {
    "type": "AWS Related",
    "name": "Amazon Redshift ODBC Driver 64-bit",
    "purpose": "Needed for redshift connection",
    "licenseType": "Free",
    "link": "https://docs.aws.amazon.com/redshift/latest/mgmt/configuring-connections.html",
    "remarks": " "
  },
  {
    "type": "AWS Related",
    "name": "AWS Command Line Interface",
    "purpose": "AWS related scripting and execution",
    "licenseType": "Free",
    "link": "https://aws.amazon.com/cli/",
    "remarks": " "
  },
  {
    "type": "AWS Related",
    "name": "awscli ",
    "purpose": "Universal Command Line Environment for AWS",
    "licenseType": "Free",
    "link": "https://aws.amazon.com/cli/",
    "remarks": " "
  },
  {
    "type": "AWS Related",
    "name": "Syslog client",
    "purpose": "For AWS config project, to connect to DB",
    "licenseType": "Free",
    "link": "https://syslog-ng.com/blog/installing-syslog-ng-aws-linux-ami/",
    "remarks": " "
  },
  {
    "type":"Basic Mac Software",
    "name":"Activity Monitor",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Terminal",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https://support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Software Update",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AddPrinter",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Certificate Assistant",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Dock",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"KeyboardSetupAssistant",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"ARDAgent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Setup Assistant",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"loginwindow",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"CharacterPalette",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"InkServer",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"KoreanIM",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"ColorSync Utility",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"System Information",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"VoiceOver Utility",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Directory Utility",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Finder",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Installer",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Archive Utility",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"HelpViewer",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Screen Sharing",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"RAID Utility",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Folder Actions Setup",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Voice Memos",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Screenshot",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Migration Assistant",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Keychain Access",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Grapher",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Disk Utility",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Console",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Boot Camp Assistant",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Audio MIDI Setup",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AirPort Utility",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"News",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Show Info",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Set Info",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Rename",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Remove",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Proof",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Match",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Extract",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Cocoa-AppleScript Applet",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Canon IJScanner2",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"ChineseTextConverterService",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"syncuid",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Conflict Resolver",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"SpeechRecognitionServer",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"SoftwareUpdateNotificationManager",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"VoiceOver Quickstart",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"ScreenReaderUIServer",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"PubSubAgent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AppleMobileSync",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AppleMobileSync",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"ParentalControls",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"DiskImages UI Agent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"CIMFindInputCodeTool",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AOSAlertManager",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"VietnameseIM",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"TrackpadIM",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"TamilIM",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"TCIM",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"SCIM",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"PressAndHold",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"PluginIM",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"KeyboardViewer",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"50onPaletteServer",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AutoImporter",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"VirtualScanner",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Type4Camera",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"PTPCamera",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"MassStorageCamera",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"MakePDF",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Build Web Page",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"WebKitPluginHost",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Wish",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"SyncServer",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"quicklookd32",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"quicklookd",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"QuickLookUIHelper",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"PrinterProxy",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"SpeechSynthesisServer",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"FontRegistryUIAgent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AddressBookManager",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"check_afp",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"rcd",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"VoiceOver",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"UserNotificationCenter",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"UnmountAssistantAgent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Ticket Viewer",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"System Events",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Spotlight",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Script Menu",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"ScreenSaverEngine",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"RegisterPluginIMApp",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Problem Reporter",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"ODSAgent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"OBEXAgent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"NetAuthAgent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Memory Slot Utility",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"LocationMenu",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Language Chooser",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Jar Launcher",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Expansion Slot Utility",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"DiskImageMounter",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Database Events",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"CoreServicesUIAgent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"CoreLocationAgent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"BluetoothUIServer",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Bluetooth Setup Assistant",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AppleScript Utility",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AppleGraphicsWarning",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AirPort Base Station Agent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AddressBookUrlForwarder",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Display Calibrator",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"imagent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Image Events",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"QtWebEngineProcess",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Grab",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Type8Camera",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Type5Camera",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"asannotation2",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"convertpdf",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"atmsupload",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Instruments",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Uninstall",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"monitor",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Install",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"CCLibrary",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"LIBS_3",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Setup",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"hpdot4d",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Crash Reporter",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AppleFileServer",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Bluetooth File Exchange",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AddressBookSourceSync",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"AddressBookSync",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"CalendarFileHandler",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Captive Network Assistant",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Embed",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Feedback Assistant",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"ManagedClient",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"OneDrive",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Photos Agent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"RapportUIAgent",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"screencapturetb",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"screencaptureui",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Script Editor",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"STMUIHelper",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"UASharedPasteboardProgressUI",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"eaptlstrust",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"SystemUIServer",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Paired Devices",
    "purpose":"Basic Mac Software",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"GoogleVoiceAndVideoUninstaller",
    "purpose":"Google Voice Plugin For Mac",
    "licenseType":"Free",
    "link":"https:\/\/tools.google.com\/dlpage\/hangoutplugin",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"activity-log-manager",
    "purpose":"blacklist configuration user interface for Zeitgeist",
    "licenseType":"Free",
    "link":"https:\/\/launchpad.net\/activity-log-manager",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"apport-gtk",
    "purpose":"GTK+ frontend for the apport crash report system",
    "licenseType":"Free",
    "link":"https:\/\/wiki.ubuntu.com\/Apport",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"apturl",
    "purpose":"install packages using the apt protocol - GTK+ frontend",
    "licenseType":"Free",
    "link":"https:\/\/pkgs.org\/download\/apturl",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"brasero",
    "purpose":"CD\/DVD burning application for GNOME",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Brasero",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"checkbox-converged",
    "purpose":"testing tool for all Ubuntu devices",
    "licenseType":"Free",
    "link":"https:\/\/pkgs.org\/download\/checkbox-converged",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"cheese",
    "purpose":"tool to take pictures and videos from your webcam",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Cheese",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"cinnamon",
    "purpose":"Innovative and comfortable desktop",
    "licenseType":"Free",
    "link":"http:\/\/cinnamon.linuxmint.com",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"cinnamon-control-center",
    "purpose":"utilities to configure the Cinnamon desktop",
    "licenseType":"Free",
    "link":"http:\/\/cinnamon.linuxmint.com\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"cinnamon-screensaver",
    "purpose":"Cinnamon screen saver and locker",
    "licenseType":"Free",
    "link":"http:\/\/cinnamon.linuxmint.com\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"cinnamon-settings-daemon",
    "purpose":"daemon handling the Cinnamon session settings",
    "licenseType":"Free",
    "link":"http:\/\/cinnamon.linuxmint.com",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"compiz",
    "purpose":"OpenGL window and compositing manager",
    "licenseType":"Free",
    "link":"https:\/\/launchpad.net\/compiz",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"deja-dup",
    "purpose":"Back up your files",
    "licenseType":"Free",
    "link":"https:\/\/launchpad.net\/deja-dup",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"emacs24",
    "purpose":"GNU Emacs editor (with GTK+ user interface)",
    "licenseType":"Free",
    "link":"https:\/\/www.gnu.org\/software\/emacs\/download.html",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"empathy",
    "purpose":"GNOME multi-protocol chat and call client",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Empathy",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"eog",
    "purpose":"Eye of GNOME graphics viewer program",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/EyeOfGnome",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"evince",
    "purpose":"Document (PostScript, PDF) viewer",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Evince",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"file-roller",
    "purpose":"archive manager for GNOME",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/FileRoller",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"firefox",
    "purpose":"Safe and easy web browser from Mozilla",
    "licenseType":"Free",
    "link":"https:\/\/www.mozilla.org\/en-US\/firefox\/new\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gedit",
    "purpose":"official text editor of the GNOME desktop environment",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Gedit",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gimp",
    "purpose":"The GNU Image Manipulation Program",
    "licenseType":"Free",
    "link":"http:\/\/www.gimp.org\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gksu",
    "purpose":"graphical front-end to su and sudo",
    "licenseType":"Free",
    "link":"http:\/\/www.nongnu.org\/gksu",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gnome",
    "purpose":"GNOME desktop",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gnome-calculator",
    "purpose":"GNOME desktop calculator",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Calculator",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gnome-control-center",
    "purpose":"utilities to configure the GNOME desktop",
    "licenseType":"Free",
    "link":"https:\/\/packages.ubuntu.com\/gnome-control-center",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gnome-mahjongg",
    "purpose":"classic Eastern tile game for GNOME",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Mahjongg",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gnome-mines",
    "purpose":"popular minesweeper puzzle game for GNOME",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Mines",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gnome-shell",
    "purpose":"graphical shell for the GNOME desktop",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Projects\/GnomeShell",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gnome-sudoku",
    "purpose":"Sudoku puzzle game for GNOME",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Sudoku",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gnome-system-log",
    "purpose":"system log viewer for GNOME",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Attic\/GnomeUtils",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gnome-system-monitor",
    "purpose":"Process viewer and system resource monitor for GNOME",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/SystemMonitor",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gnome-terminal",
    "purpose":"GNOME terminal emulator application",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Terminal",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gnome-initial-setup",
    "purpose":"helps easily configure your language, keyboard layout",
    "licenseType":"Free",
    "link":"https:\/\/launchpad.net\/ubuntu\/bionic\/+package\/gnome-initial-setup",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gnome-tweak-tool",
    "purpose":"Graphical interface for advanced GNOME 3 settings.",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/action\/show\/Apps\/Tweaks?action=show&redirect=Apps%2FGnomeTweakTool",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gnomine",
    "purpose":"popular minesweeper puzzle game for GNOME (transitional package)",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Terminal",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gdebi",
    "purpose":"simple tool to view and install deb files - GNOME GUI",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Terminal",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gparted",
    "purpose":"GNOME partition editor",
    "licenseType":"Free",
    "link":"http:\/\/gparted.sourceforge.net",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"gucharmap",
    "purpose":"Unicode character picker and font browser",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Gucharmap",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"guidus",
    "purpose":"guidus - GUI for dus, tool to create boot drives",
    "licenseType":"Free",
    "link":"https:\/\/help.ubuntu.com\/community\/mkusb",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"hplip",
    "purpose":"HP Linux Printing and Imaging System (HPLIP)",
    "licenseType":"Free",
    "link":"http:\/\/hplipopensource.com\/hplip-web\/index.html",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"im-config",
    "purpose":"Input method configuration framework",
    "licenseType":"Free",
    "link":"https:\/\/packages.ubuntu.com\/xenial\/im-config",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"indicator-multiload",
    "purpose":"Graphical system load indicator for CPU",
    "licenseType":"Free",
    "link":"https:\/\/wiki.ubuntu.com\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"libreoffice-base",
    "purpose":"office productivity suite -- database",
    "licenseType":"Free",
    "link":"http:\/\/www.libreoffice.org",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"libreoffice-calc",
    "purpose":"office productivity suite -- spreadsheet",
    "licenseType":"Free",
    "link":"http:\/\/www.libreoffice.org",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"libreoffice-draw",
    "purpose":"office productivity suite -- drawing",
    "licenseType":"Free",
    "link":"http:\/\/www.libreoffice.org",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"libreoffice-impress",
    "purpose":"office productivity suite -- presentation",
    "licenseType":"Free",
    "link":"http:\/\/www.libreoffice.org",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"libreoffice-math",
    "purpose":"office productivity suite -- equation editor",
    "licenseType":"Free",
    "link":"http:\/\/www.libreoffice.org",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"libreoffice-writer",
    "purpose":"office productivity suite -- word processor",
    "licenseType":"Free",
    "link":"http:\/\/www.libreoffice.org",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"mkusb",
    "purpose":"mkusb - tool to create boot drives",
    "licenseType":"Free",
    "link":"https:\/\/help.ubuntu.com\/community\/mkusb",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"mutter",
    "purpose":"lightweight GTK+ window manager",
    "licenseType":"Free",
    "link":"https:\/\/packages.ubuntu.com\/trusty\/x11\/mutter",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"nautilus",
    "purpose":"file manager and graphical shell for GNOME",
    "licenseType":"Free",
    "link":"http:\/\/www.gnome.org\/projects\/nautilus\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"notification-daemon",
    "purpose":"daemon for displaying passive pop-up notifications",
    "licenseType":"Free",
    "link":"https:\/\/packages.ubuntu.com\/source\/trusty\/notification-daemon",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"nemo",
    "purpose":"File manager and graphical shell for Cinnamon",
    "licenseType":"Free",
    "link":"http:\/\/cinnamon.linuxmint.com\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"onboard",
    "purpose":"Simple On-screen Keyboard",
    "licenseType":"Free",
    "link":"https:\/\/launchpad.net\/onboard",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"openssh-client",
    "purpose":"secure shell (SSH) client",
    "licenseType":"Free",
    "link":"https:\/\/help.ubuntu.com\/community\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"openssh-server",
    "purpose":"secure shell (SSH) server",
    "licenseType":"Free",
    "link":"https:\/\/help.ubuntu.com\/community\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"pacman",
    "purpose":"Chase Monsters in a Labyrinth",
    "licenseType":"Free",
    "link":"https:\/\/pkgs.org\/download\/pacman",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"pavucontrol",
    "purpose":"PulseAudio Volume Control",
    "licenseType":"Free",
    "link":"https:\/\/wiki.ubuntu.com\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"pulseaudio-equalizer",
    "purpose":"Equalizer sink module for PulseAudio sound server",
    "licenseType":"Free",
    "link":"https:\/\/wiki.ubuntu.com\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"pypar2",
    "purpose":"graphical frontend for the par2 utility",
    "licenseType":"Free",
    "link":"http:\/\/pypar2.silent-blade.org\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"remmina",
    "purpose":"remote desktop client for GNOME desktop environment",
    "licenseType":"Free",
    "link":"http:\/\/remmina.sourceforge.net\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"rhythmbox",
    "purpose":"music player and organizer for GNOME",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Rhythmbox",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"safeeyes",
    "purpose":"Safe Eyes",
    "licenseType":"Free",
    "link":"https:\/\/wiki.ubuntu.com\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"screen",
    "purpose":"allows you to use multiple terminal sessions within one window",
    "licenseType":"Free",
    "link":"https:\/\/wiki.ubuntu.com\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"seahorse",
    "purpose":"GNOME front end for GnuPG",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Seahorse",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"shotwell",
    "purpose":"digital photo organizer",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Shotwell",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"signon-ui",
    "purpose":"Dummy transitional package for signon-ui",
    "licenseType":"Free",
    "link":"https:\/\/launchpad.net\/signon-ui",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"simple-scan",
    "purpose":"Simple Scanning Utility",
    "licenseType":"Free",
    "link":"https:\/\/launchpad.net\/simple-scan",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"skype",
    "purpose":"client for Skype VOIP and instant messaging service",
    "licenseType":"Free",
    "link":"http:\/\/www.skype.com",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"software-properties-gtk",
    "purpose":"manage the repositories that you install software from (gtk)",
    "licenseType":"Free",
    "link":"https:\/\/packages.ubuntu.com\/trusty\/gnome\/software-properties-gtk",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"system-config-printer",
    "purpose":"graphical interface to configure the printing system        ",
    "licenseType":"Free",
    "link":"https:\/\/pkgs.org\/download\/system-config-printer",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"time",
    "purpose":"GNU time program for measuring CPU resource usage",
    "licenseType":"Free",
    "link":"https:\/\/wiki.ubuntu.com\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"thunderbird",
    "purpose":"Email, RSS and newsgroup client with integrated spam filter",
    "licenseType":"Free",
    "link":"https:\/\/mozilla-thunderbird.en.uptodown.com\/ubuntu",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"totem",
    "purpose":"Simple media player for the GNOME desktop based on GStreamer",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Videos",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"unetbootin",
    "purpose":"installer of Linux\/BSD distributions to a partition or USB drive",
    "licenseType":"Free",
    "link":"http:\/\/unetbootin.sourceforge.net",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"unity-control-center",
    "purpose":"utilities to configure the GNOME desktop",
    "licenseType":"Free",
    "link":"https:\/\/pkgs.org\/download\/unity-control-center",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"unity-lens-photos",
    "purpose":"Photos lens for Unity",
    "licenseType":"Free",
    "link":"https:\/\/packages.ubuntu.com\/xenial\/gnome\/unity-lens-photos",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"unity-scope-gdrive",
    "purpose":"Google Drive scope for Unity",
    "licenseType":"Free",
    "link":"https:\/\/launchpad.net\/unity-scope-gdrive",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"update-manager",
    "purpose":"GNOME application that manages apt updates",
    "licenseType":"Free",
    "link":"https:\/\/packages.ubuntu.com\/trusty-updates\/update-manager",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"usb-creator-gtk",
    "purpose":"create a startup disk using a CD or disc image (for GNOME)",
    "licenseType":"Free",
    "link":"https:\/\/pkgs.org\/download\/usb-creator-gtk",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"variety",
    "purpose":"Wallpaper changer",
    "licenseType":"Free",
    "link":"https:\/\/wiki.ubuntu.com\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"vim",
    "purpose":"Vi IMproved - enhanced vi editor",
    "licenseType":"Free",
    "link":"http:\/\/www.vim.org\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"vlc",
    "purpose":"multimedia player and streamer",
    "licenseType":"Free",
    "link":"http:\/\/www.videolan.org\/vlc\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"webbrowser-app",
    "purpose":"Ubuntu web browser",
    "licenseType":"Free",
    "link":"https:\/\/launchpad.net\/webbrowser-app",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"xdiagnose",
    "purpose":"X.org diagnosis tool",
    "licenseType":"Free",
    "link":"http:\/\/wiki.ubuntu.com\/X",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"indicator-stickynotes",
    "purpose":"Sticky Notes Application",
    "licenseType":"Free",
    "link":"https:\/\/launchpad.net\/indicator-stickynotes",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"xpad",
    "purpose":"sticky note application for X",
    "licenseType":"Free",
    "link":"http:\/\/mterry.name\/xpad\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"xsane",
    "purpose":"featureful graphical frontend for SANE (Scanner Access Now Easy)",
    "licenseType":"Free",
    "link":"http:\/\/www.xsane.org\/",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"yelp",
    "purpose":"Help browser for GNOME",
    "licenseType":"Free",
    "link":"https:\/\/wiki.gnome.org\/Apps\/Yelp",
    "remarks":" "
  },
  {
    "type":"Basic Ubuntu Software",
    "name":"mlocate",
    "purpose":"An utility for finding files by name",
    "licenseType":"Free",
    "link":"https:\/\/pkgs.org\/download\/mlocate",
    "remarks":" "
  },
  {
    "type":"Browser",
    "name":"firefox",
    "purpose":"Mozilla's Web Browser in Linux",
    "licenseType":"Free",
    "link":"https:\/\/www.ubuntu.com\/download",
    "remarks":" "
  },
  {
    "type":"Browser",
    "name":"Mozilla Firefox",
    "purpose":"Mozilla's Web Browser",
    "licenseType":"Free",
    "link":"https:\/\/www.mozilla.org\/en-US\/firefox\/new\/",
    "remarks":" "
  },
  {
    "type":"Browser",
    "name":"Google Chrome",
    "purpose":"Google's Web Browser",
    "licenseType":"Free",
    "link":"https:\/\/www.google.com\/chrome\/",
    "remarks":" "
  },
  {
    "type":"Browser",
    "name":"google-chrome-stable",
    "purpose":"Google's Web Browser for Ubuntu",
    "licenseType":"Free",
    "link":"https:\/\/www.google.com\/chrome\/",
    "remarks":" "
  },
  {
    "type":"Browser",
    "name":"Internet Explorer",
    "purpose":"Microsoft's Web Browser by default",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/internet-explorer.aspx",
    "remarks":" "
  },
  {
    "type":"Browser",
    "name":"Microsoft Edge",
    "purpose":"Microsoft's Web Browser by default",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/edge",
    "remarks":" "
  },
  {
    "type":"Browser",
    "name":"Chromium",
    "purpose":"Browser",
    "licenseType":"Free",
    "link":"https:\/\/www.chromium.org\/getting-involved\/download-chromium",
    "remarks":" "
  },
  {
    "type":"Browser",
    "name":"chrome-gnome-shell",
    "purpose":"Browser",
    "licenseType":"Free",
    "link":"https:\/\/www.ubuntu.com\/download",
    "remarks":" "
  },
  {
    "type":"Browser",
    "name":"chromium-browser",
    "purpose":"Chromium web browser, open-source version of Chrome",
    "licenseType":"Free",
    "link":"https:\/\/chromium.googlesource.com\/chromium\/src\/",
    "remarks":" "
  },
  {
    "type":"Browser Service",
    "name":"firefox-locale-en",
    "purpose":"Basic Ubuntu Software",
    "licenseType":"Free",
    "link":"https:\/\/www.ubuntu.com\/download",
    "remarks":" "
  },
  {
    "type":"Browser Service",
    "name":"Mozilla Maintenance Service",
    "purpose":"Enables automatic allows application updates to occur in the background",
    "licenseType":"Free",
    "link":"https:\/\/support.mozilla.org\/en-US\/kb\/what-mozilla-maintenance-service",
    "remarks":" "
  },
  {
    "type":"Browser Service",
    "name":"Google Docs",
    "purpose":"Google Docs",
    "licenseType":"Free",
    "link":"https:\/\/www.google.com\/chrome\/",
    "remarks":" "
  },
  {
    "type":"Browser Service",
    "name":"Google Sheets",
    "purpose":"Google Sheets",
    "licenseType":"Free",
    "link":"https:\/\/www.google.com\/chrome\/",
    "remarks":" "
  },
  {
    "type":"Browser Service",
    "name":"Google Slides",
    "purpose":"Google Slides",
    "licenseType":"Free",
    "link":"https:\/\/www.google.com\/chrome\/",
    "remarks":" "
  },
  {
    "type":"Build Automation Tool",
    "name":"Maven",
    "purpose":"Build Dependency",
    "licenseType":"Free",
    "link":"https:\/\/maven.apache.org\/",
    "remarks":" "
  },
  {
    "type":"CCTV Camera Software ",
    "name":"ocxsetup",
    "purpose":"For CCTV streaming and storing videos",
    "licenseType":"Free",
    "link":"Supplied by vendor",
    "remarks":" "
  },
  {
    "type":"Cloud Service",
    "name":"Microsoft's cross-platform database tool",
    "purpose":"Microsoft's cloud computing platform",
    "licenseType":"Licensed",
    "link":"https:\/\/azure.microsoft.com\/en-us\/",
    "remarks":" "
  },
  {
    "type":"Cloud Service",
    "name":"Azure Data Studio",
    "purpose":"cross-platform database tool",
    "licenseType":"Free",
    "link":"https:\/\/docs.microsoft.com\/en-us\/sql\/azure-data-studio\/download-azure-data-studio?view=sql-server-ver15",
    "remarks":" "
  },
  {
    "type":"Command line utility",
    "name":"xclip",
    "purpose":"Python Dependency",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/astrand\/xclip",
    "remarks":" "
  },
  {
    "type":"Command line utility",
    "name":"s3cmd",
    "purpose":"S3 API",
    "licenseType":"Free",
    "link":"http:\/\/s3tools.org\/s3cmd",
    "remarks":" "
  },
  {
    "type":"Command line utility",
    "name":"curl",
    "purpose":"command line tool for transferring data with URL syntax",
    "licenseType":"Free",
    "link":"https:\/\/curl.haxx.se\/download.html",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"Skype",
    "purpose":"Communications",
    "licenseType":"Free",
    "link":"https:\/\/www.skype.com\/en\/",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"Zoom",
    "purpose":"Remote conferencing services",
    "licenseType":"Licensed",
    "link":"https:\/\/zoom.us\/",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"zoom.us",
    "purpose":"Remote conferencing services",
    "licenseType":"Free",
    "link":"https:\/\/zoom.us\/",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"Zoom Room",
    "purpose":"Remote conferencing services",
    "licenseType":"Free",
    "link":"https:\/\/zoom.us\/",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"Zoom Info for SalesForce",
    "purpose":"Prospect and enrich new leads, contacts and accounts with ZoomInfo data.",
    "licenseType":"Licensed",
    "link":"https:\/\/appexchange.salesforce.com\/appxListingDetail?listingId=a0N30000008a8ljEAA",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"RingCentral",
    "purpose":"Remote conferencing services",
    "licenseType":"Free",
    "link":"https:\/\/www.ringcentral.com\/",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"RingCentral Meetings        ",
    "purpose":"Remote conferencing services for MAC",
    "licenseType":"Free",
    "link":"https:\/\/www.ringcentral.com\/",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"Hangouts",
    "purpose":"Communications",
    "licenseType":"Free",
    "link":"https:\/\/hangouts.google.com\/",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":" ",
    "purpose":"Communications",
    "licenseType":"Free",
    "link":"https:\/\/hangouts.google.com\/",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"GoTo Opener",
    "purpose":"Application used by GoTo Opener to launch a user in Active session",
    "licenseType":"Free",
    "link":"https:\/\/support.logmeininc.com\/gotomeeting\/help\/about-the-goto-opener-g2m850000",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"LogMeIn",
    "purpose":"Remote Desktop",
    "licenseType":"Licensed",
    "link":"https:\/\/www.logmein.com\/",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"Google Talk Plugin",
    "purpose":"Google Chat properties for MAC",
    "licenseType":"Free",
    "link":"https:\/\/google-talk-plugin.soft32.com\/",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"GoogleTalkPlugin        ",
    "purpose":"Google Chat properties",
    "licenseType":"Free",
    "link":"https:\/\/google-talk-plugin.soft32.com\/",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"Uninstall AnyConnect",
    "purpose":"Uninstall AnyConnect from Mac",
    "licenseType":"Free",
    "link":"https:\/\/www.cisco.com\/c\/en\/us\/support\/security\/anyconnect-secure-mobility-client\/tsd-products-support-series-home.html",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"WebEx",
    "purpose":"Remote conferencing services",
    "licenseType":"Free",
    "link":"https:\/\/www.webex.com\/downloads.html",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"Viber",
    "purpose":"Communications",
    "licenseType":"Free",
    "link":"https:\/\/www.viber.com\/download\/",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"AdobeConnect",
    "purpose":"Webinar tool",
    "licenseType":"Licensed",
    "link":"https:\/\/www.adobe.com\/products\/adobeconnect.html?sdid=SEMBREXCT&gclid=EAIaIQobChMI7Z3B0buM4wIVxECGCh0uWgr-EAAYASAAEgKCZ_D_BwE",
    "remarks":" "
  },
  {
    "type":"Communication ",
    "name":"GoToMeeting",
    "purpose":"Online meeting, desktop sharing, and video conferencing software ",
    "licenseType":"Free",
    "link":"https:\/\/www.gotomeeting.com\/b",
    "remarks":" "
  },
  {
    "type":"Communication ",
    "name":"GoToOpener",
    "purpose":"Installed by GoToMeeting",
    "licenseType":"Free",
    "link":"https:\/\/www.gotomeeting.com\/b",
    "remarks":" "
  },
  {
    "type":"Communication",
    "name":"Slack",
    "purpose":"Team collaboration tool",
    "licenseType":"Free",
    "link":"https:\/\/slack.com\/",
    "remarks":" "
  },
  {
    "type":"Compiler ",
    "name":"g++",
    "purpose":"Dependency for Protocal Buffer",
    "licenseType":"Free",
    "link":"https:\/\/gcc.gnu.org\/",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"MySQL Workbench",
    "purpose":"DBMS tool",
    "licenseType":"Free",
    "link":"https:\/\/dev.mysql.com\/downloads\/workbench\/?utm_source=tuicool",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"MySQLWorkbench",
    "purpose":"DBMS tool",
    "licenseType":"Free",
    "link":"https:\/\/dev.mysql.com\/downloads\/workbench\/?utm_source=tuicool",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"MySQLWorkbench 2",
    "purpose":"DBMS tool",
    "licenseType":"Free",
    "link":"https:\/\/dev.mysql.com\/downloads\/workbench\/?utm_source=tuicool",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"mysql-community",
    "purpose":"DBMS tool for CentOS",
    "licenseType":"Free",
    "link":"https:\/\/linuxize.com\/post\/install-mysql-on-centos-7\/",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"Aginity Workbench for Redshift",
    "purpose":"DBMS tool for data analysts and developers",
    "licenseType":"Free",
    "link":"http:\/\/www.aginity.com\/workbench-overview\/",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"Coginiti Pro",
    "purpose":"DBMS tool for data analysts and developers",
    "licenseType":"Free",
    "link":"http:\/\/www.aginity.com\/workbench-overview\/",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"SQL Server ",
    "purpose":"Stores and retrieves data as requested by other software applications",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cdw.com\/product\/Microsoft-SQL-Server-2017-Standard-license-1-server\/4817457",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"Microsoft ODBC Driver",
    "purpose":"Needed for db connection",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=50420",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"dbeaver-ce",
    "purpose":"Database GUI editor.",
    "licenseType":"Free",
    "link":"https:\/\/dbeaver.io\/download\/",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":".NET",
    "purpose":"Stores and retrieves data as requested by other software applications",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-gb\/sql-server\/sql-server-downloads",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"RELMA",
    "purpose":"LOINC Lookup Tool",
    "licenseType":"Free",
    "link":"https:\/\/loinc.org\/downloads\/relma\/",
    "remarks":"#168336"
  },
  {
    "type":"Database",
    "name":"Microsoft Access",
    "purpose":"A database management system (DBMS) from Microsoft",
    "licenseType":"Licensed",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/confirmation.aspx?id=50040",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"pgadmin",
    "purpose":"Administration platform for PostgreSQL",
    "licenseType":"Free",
    "link":"https:\/\/www.pgadmin.org\/",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"Prerequisites for SSDT",
    "purpose":"Installed by SQL Server",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cdw.com\/product\/Microsoft-SQL-Server-2017-Standard-license-1-server\/4817457",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"PostgreSQL 10",
    "purpose":"managing and developing your databases",
    "licenseType":"Free",
    "link":"https:\/\/www.postgresql.org\/",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"Microsoft SQL Server Management Studio",
    "purpose":"For managing any SQL infrastructure",
    "licenseType":"Free",
    "link":"https:\/\/docs.microsoft.com\/en-us\/sql\/ssms\/download-sql-server-management-studio-ssms?view=sql-server-2017",
    "remarks":"macOS"
  },
  {
    "type":"Database",
    "name":"Integration Services",
    "purpose":"Dependancy of Microsoft SSMS",
    "licenseType":"Free",
    "link":"https:\/\/docs.microsoft.com\/en-us\/sql\/ssms\/download-sql-server-management-studio-ssms?view=sql-server-2017",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"SSMS Post Install Tasks        ",
    "purpose":"Dependancy of Microsoft SSMS",
    "licenseType":"Free",
    "link":"https:\/\/docs.microsoft.com\/en-us\/sql\/ssms\/download-sql-server-management-studio-ssms?view=sql-server-2017",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"Robo 3T",
    "purpose":"Mongodb client to query mongodb. Mysql workbench equivalent.",
    "licenseType":"Free",
    "link":"https:\/\/robomongo.org\/download",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"Studio 3T",
    "purpose":"Studio 3T, Robo 3T's big brother.",
    "licenseType":"Free",
    "link":"https:\/\/robomongo.org\/download",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"ElasticSearch Toolbox",
    "purpose":"distributed search and analytics engine",
    "licenseType":"Free",
    "link":"https:\/\/www.elastic.co\/downloads\/elasticsearch",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"mysql-workbench",
    "purpose":"MySQL Workbench - a visual database modeling, administration and queuing tool",
    "licenseType":"Free",
    "link":"http:\/\/dev.mysql.com\/workbench\/",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"Microsoft Access Runtime 2010",
    "purpose":"Developing database management solutions",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=10910",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"MariaDB",
    "purpose":"Open-source relational database management system",
    "licenseType":"Free",
    "link":"https:\/\/mariadb.com\/",
    "remarks":" "
  },
  {
    "type":"Database ",
    "name":"MySQL",
    "purpose":"Open-source relational database management system",
    "licenseType":"Free",
    "link":"https:\/\/www.mysql.com\/downloads\/",
    "remarks":" "
  },
  {
    "type":"Database Design ",
    "name":"SQLWorkBench",
    "purpose":"Redshift",
    "licenseType":"Free",
    "link":"https:\/\/dev.mysql.com\/downloads\/workbench\/?utm_source=tuicool",
    "remarks":" "
  },
  {
    "type":"Database Design ",
    "name":"SQLWorkbench\/J",
    "purpose":"Redshift",
    "licenseType":"Free",
    "link":"https:\/\/www.sql-workbench.eu\/downloads.html",
    "remarks":" "
  },
  {
    "type":"Database Design ",
    "name":"DBeaver",
    "purpose":"Redshift",
    "licenseType":"Free",
    "link":"https:\/\/dbeaver.io\/",
    "remarks":" "
  },
  {
    "type":"Database Design ",
    "name":"Protocol Buffers",
    "purpose":"Development",
    "licenseType":"Free",
    "link":"https:\/\/developers.google.com\/protocol-buffers\/docs\/downloads",
    "remarks":" "
  },
  {
    "type":"Dependency software",
    "name":"adobe-flash-properties-gtk",
    "purpose":"needed for web browser (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/launchpad.net\/ubuntu\/precise\/+package\/adobe-flash-properties-gtk",
    "remarks":" "
  },
  {
    "type":"Dependency software",
    "name":"alien",
    "purpose":"needed for installing rpm packages (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/packages.ubuntu.com\/search?keywords=alien",
    "remarks":" "
  },
  {
    "type":"Dependency software",
    "name":"ansible",
    "purpose":"Docker and Kubernetics (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/docs.ansible.com\/",
    "remarks":" "
  },
  {
    "type":"Dependency software",
    "name":"docbook-xml",
    "purpose":"Docker and Kubernetics (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/packages.ubuntu.com\/trusty\/docbook-xml",
    "remarks":" "
  },
  {
    "type":"Dependency software",
    "name":"docbook-xsl",
    "purpose":"Docker and Kubernetics (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/sourceforge.net\/projects\/docbook\/files\/docbook-xsl\/",
    "remarks":" "
  },
  {
    "type":"Dependency software",
    "name":"docker-ce",
    "purpose":"Docker and Kubernetics (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/docs.docker.com\/install\/linux\/docker-ce\/ubuntu\/",
    "remarks":" "
  },
  {
    "type":"Dependency software",
    "name":"ffmpeg",
    "purpose":"Needed for audio\/video (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/www.ffmpeg.org\/download.html",
    "remarks":" "
  },
  {
    "type":"Dependency software",
    "name":"freepats",
    "purpose":"Needed for audio\/video (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/launchpad.net\/ubuntu\/+source\/freepats",
    "remarks":" "
  },
  {
    "type":"Dependency software",
    "name":"frei0r-plugins",
    "purpose":"Needed for audio\/video (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/packages.ubuntu.com\/search?keywords=frei0r-plugins",
    "remarks":" "
  },
  {
    "type":"Dependency software",
    "name":"expect",
    "purpose":"Automates interactive applications",
    "licenseType":"Free",
    "link":"https:\/\/sourceforge.net\/projects\/expect\/",
    "remarks":" "
  },
  {
    "type":"Dependency software",
    "name":"finger",
    "purpose":"user information lookup program",
    "licenseType":"Free",
    "link":"https:\/\/pkgs.org\/download\/finger",
    "remarks":" "
  },
  {
    "type":"Dependency software",
    "name":"dos2unix",
    "purpose":"convert text file line endings between CRLF and LF",
    "licenseType":"Free",
    "link":"https:\/\/sourceforge.net\/projects\/dos2unix\/",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Acrobat Pro DC",
    "purpose":"PDF Document Editor",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Adobe Acrobat Reader DC",
    "purpose":"PDF Document Reader",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Acrobat Distiller",
    "purpose":"converting documents from PostScript format to Adobe PDF",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Air",
    "purpose":"Software that creates a cinematic movie titles, intros, and transition",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=E85DE6CDAA9C40FB8553B52564B2176A&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=2XBSC4R3&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe illustrator",
    "purpose":"Software that creates and edits vector graphics",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=43538F47236C326E137A08307BFA70F2&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=4SC998QL&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Indesign",
    "purpose":"Desktop publishing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=4C0BE17691903B5FFB8DA282DEAC55FE&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=4X3B94ZK&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Photoshop",
    "purpose":"Image editing software application ",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=30404A88D89A328584307175B8B27616&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=5F1G8N2F&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Premiere",
    "purpose":"Video editing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Animate",
    "purpose":"Video editing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Audition",
    "purpose":"Video editing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Bridge",
    "purpose":"Video editing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Character Animator",
    "purpose":"Video editing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Creative Cloud",
    "purpose":"Video editing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Dimension",
    "purpose":"Video editing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Lightroom",
    "purpose":"Video editing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe InCopy",
    "purpose":"Video editing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Dreamweaver",
    "purpose":"Video editing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe Prelude",
    "purpose":"Video editing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Adobe After Effects",
    "purpose":"digital visual effects",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Design ",
    "name":"Image Resizer for Windows",
    "purpose":"Edits image files",
    "licenseType":"Free",
    "link":"https:\/\/www.bricelam.net\/ImageResizer\/",
    "remarks":" "
  },
  {
    "type":"Design ",
    "name":"Adobe Air",
    "purpose":"Used by Balsamique",
    "licenseType":"Licensed",
    "link":"https:\/\/get.adobe.com\/air\/otherversions\/",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"Aplhacard ID Suite",
    "purpose":"ID Card priner design tool",
    "licenseType":"Licensed",
    "link":"https:\/\/www.alphacard.com\/",
    "remarks":" "
  },
  {
    "type":"Design",
    "name":"BlackMagic Raw",
    "purpose":"Working with raw video files",
    "licenseType":"Free",
    "link":"https:\/\/www.blackmagicdesign.com\/support\/",
    "remarks":" "
  },
  {
    "type":"Development",
    "name":"valet",
    "purpose":"Localsite opened with https",
    "licenseType":"Free",
    "link":"https:\/\/cpriego.github.io\/valet-linux\/",
    "remarks":" "
  },
  {
    "type":"Development",
    "name":"Android Studio",
    "purpose":"programming environment for Android",
    "licenseType":"Free",
    "link":"https:\/\/developer.android.com\/studio\/#downloads",
    "remarks":" "
  },
  {
    "type":"Development",
    "name":"jmeter",
    "purpose":"load test functional behavior and measure performance",
    "licenseType":"Free",
    "link":"https:\/\/jmeter.apache.org\/",
    "remarks":" "
  },
  {
    "type":"Development",
    "name":"TxText Control",
    "purpose":"application for Letter Tool",
    "licenseType":"Free",
    "link":"https:\/\/www.textcontrol.com\/",
    "remarks":" "
  },
  {
    "type":"Diagnostic tool",
    "name":"UmbrellaDiagnostic",
    "purpose":"Cisco AnyConnect Diagnostic tool",
    "licenseType":"Free",
    "link":"http:\/\/www.opendns.com\/download\/mac\/diagnostic",
    "remarks":" "
  },
  {
    "type":"Directory Service",
    "name":"Jumpcloud",
    "purpose":"Directory Service",
    "licenseType":"Licensed",
    "link":"https:\/\/support.jumpcloud.com\/customer\/portal\/articles\/2403462-jumpcloud-agent-windows-installation-walkthrough",
    "remarks":" "
  },
  {
    "type":"Directory Service",
    "name":"jumpcloud-agent-app 1.5.1",
    "purpose":"Directory Service",
    "licenseType":"Licensed",
    "link":"https:\/\/support.jumpcloud.com\/customer\/portal\/articles\/2403462-jumpcloud-agent-windows-installation-walkthrough",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"NVIDIA ",
    "purpose":"driver",
    "licenseType":"Free",
    "link":"https:\/\/www.geforce.com\/drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Canon MF",
    "purpose":"Printer Driver",
    "licenseType":"Free",
    "link":"https:\/\/www.usa.canon.com\/internet\/portal\/us\/home\/support\/details\/printers\/support-laser-printers-imageclass\/imageclass-mf4450",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"EPSON",
    "purpose":"Printer Driver",
    "licenseType":"Free",
    "link":"http:\/\/www.driversepson.com\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"HP LaserJet ",
    "purpose":"Printer Driver",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"64 Bit HP CIO Components Installer",
    "purpose":"Part of HP Printer Driver",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Dolby Audio",
    "purpose":"Audio Driver for computers",
    "licenseType":"Free",
    "link":"https:\/\/www.dolby.com\/us\/en\/drivers.html",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Dolby Digital Plus",
    "purpose":"Audio Driver for computers",
    "licenseType":"Free",
    "link":"https:\/\/www.dolby.com\/us\/en\/drivers.html",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"HP LJ M1530",
    "purpose":"Hp Printer Basic Software Drivers ",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"hppFaxUtility",
    "purpose":"Hp Printer Basic Software Drivers ",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"hppFonts",
    "purpose":"Hp Printer Basic Software Drivers ",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"hppLaserJetService",
    "purpose":"Hp Printer Basic Software Drivers ",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"hppLJM2727",
    "purpose":"Hp Printer Basic Software Drivers ",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"hppManualsM2727",
    "purpose":"Hp Printer Basic Software Drivers ",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"hppScanTo",
    "purpose":"Hp Printer Basic Software Drivers ",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"hppSendFaxM2727",
    "purpose":"Hp Printer Basic Software Drivers ",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"hppTLBXFXM2727",
    "purpose":"Hp Printer Basic Software Drivers ",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"hppusgM2727",
    "purpose":"Hp Printer Basic Software Drivers ",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"HPSSupply",
    "purpose":"Hp Printer Basic Software Drivers ",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"hpzTLBXFX",
    "purpose":"Hp Printer Basic Software Drivers ",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Intel(R) Processor Graphics",
    "purpose":"Software that controls a computer's video adapter ",
    "licenseType":"Free",
    "link":"https:\/\/downloadcenter.intel.com\/product\/80939\/Graphics-Drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Intel(R) Graphics Media Accelerator Driver",
    "purpose":"Intel Graphics Driver",
    "licenseType":"Free",
    "link":"https:\/\/downloadcenter.intel.com\/product\/80939\/Graphics-Drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"EasyCamera",
    "purpose":"Enables Lenevo Camera for skype and other applications",
    "licenseType":"Free",
    "link":"https:\/\/support.lenovo.com\/de\/en\/downloads\/ds031749",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Lenovo Yoga Mode Control (Inf Install)",
    "purpose":"Service program to or enable keyboard and touchpad",
    "licenseType":"Free",
    "link":"https:\/\/pcsupport.lenovo.com\/de\/en\/products\/laptops-and-netbooks\/yoga-series\/yoga-3-pro-1370-laptop-lenovo\/downloads\/ds104833",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Realtek High Definition Audio Driver",
    "purpose":"Audio Driver for computers ",
    "licenseType":"Free",
    "link":"http:\/\/www.realtek.com.tw\/DOWNLOADS\/downloadsCheck.aspx?Langid=1&PNid=14&PFid=24&Level=4&Conn=3&DownTypeID=3",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Toner Status",
    "purpose":"Check estimated ink or toner levels for HP Printer ",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/lt-en\/document\/c04927206",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Vulkan Run Time Libraries 1.0.33.0",
    "purpose":"Provide lower overhead and controll over the GPU and lower CPU usage",
    "licenseType":"Free",
    "link":"https:\/\/www.lunarg.com\/vulkan-sdk\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Vulkan Run Time Libraries 1.0.42.0",
    "purpose":"Provide lower overhead and controll over the GPU and lower CPU usage",
    "licenseType":"Free",
    "link":"https:\/\/www.lunarg.com\/vulkan-sdk\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Realtek Card Reader",
    "purpose":"Read digital camera media cards via a USB port ",
    "licenseType":"Free",
    "link":"http:\/\/www.realtek.com.tw\/Downloads\/downloadsView.aspx?Conn=3&DownTypeID=3&Level=4&PFid=25&PNid=15",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"USB Ethernet Adapter",
    "purpose":"USB2.0 To Fast Ethernet Adapter Driver",
    "licenseType":"Free",
    "link":"https:\/\/drp.su\/en\/devices\/lan\/corechip\/rd9700-usb2-0-to-fast-ethernet-adapter",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Atheros Client Installation Program",
    "purpose":"Driver for Wifi ",
    "licenseType":"Free",
    "link":"https:\/\/www.ath-drivers.eu\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Synaptics driver",
    "purpose":"Synaptics Pointing Device Driver",
    "licenseType":"Free",
    "link":"https:\/\/www.quora.com\/What-is-a-synaptic-pointing-device-Should-you-remove-it-from-your-PC",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"NpDvrClient",
    "purpose":"DVR plugin driver",
    "licenseType":"Free",
    "link":"http:\/\/10.100.255.130\/DvrWebClient.exe",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"ELAN Touchpad",
    "purpose":"Laptop touchpad driver",
    "licenseType":"Free",
    "link":"http:\/\/drivers.softpedia.com\/get\/KEYBOARD-and-MOUSE\/Elantech\/ELAN-Touchpad-Driver-152123-for-Windows-10-Anniversary-Update.shtml",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Dell Touchpad",
    "purpose":"Dell Touchpad Driver",
    "licenseType":"Free",
    "link":"https:\/\/www.dell.com\/support\/home\/us\/en\/04\/drivers\/driversdetails?driverid=1jw07",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"AMD",
    "purpose":"AMD Driver",
    "licenseType":"Free",
    "link":"https:\/\/www.amd.com\/en\/support\/kb\/release-notes\/rn-rad-win-15-7-1",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Catalyst Control Center",
    "purpose":"AMD Driver",
    "licenseType":"Free",
    "link":"https:\/\/www.amd.com\/en\/support\/kb\/release-notes\/rn-rad-win-15-7-1",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Maxx Audio Installer",
    "purpose":"Dell's Audio driver",
    "licenseType":"Free",
    "link":"https:\/\/www.dell.com\/support\/home\/us\/en\/04\/drivers\/driversdetails?driverid=r70v3",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Conexant ",
    "purpose":"Audio driver",
    "licenseType":"Free",
    "link":"https:\/\/drivers.softpedia.com\/get\/SOUND-CARD\/Conexant\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Realtek Audio",
    "purpose":"Audio driver",
    "licenseType":"Free",
    "link":"https:\/\/realtek-hd-audio-drivers-vista.en.softonic.com\/download",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Canon Drivers",
    "purpose":"Printer Driver",
    "licenseType":"Free",
    "link":"https:\/\/support-th.canon-asia.com\/contents\/TH\/EN\/0100297401.html",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Intel(R)",
    "purpose":"Intel chip based driver",
    "licenseType":"Free",
    "link":"https:\/\/downloadcenter.intel.com\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Lenovo Power Management Driver",
    "purpose":"Lenovo driver",
    "licenseType":"Free",
    "link":"https:\/\/support.lenovo.com\/us\/en\/solutions\/tvsu-update",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"ALPS Touch Pad Driver",
    "purpose":"ALPS Touch Pad Driver",
    "licenseType":"Free",
    "link":"https:\/\/drivers.softpedia.com\/get\/KEYBOARD-and-MOUSE\/ALPS\/Alps-Pointing-Device-Driver-100404114-for-Windows-10.shtml",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Acer Care Center",
    "purpose":"Acer driver",
    "licenseType":"Free",
    "link":"https:\/\/www.acer.com\/ac\/en\/US\/content\/drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Acer Collection",
    "purpose":"Acer driver",
    "licenseType":"Free",
    "link":"https:\/\/www.acer.com\/ac\/en\/US\/content\/drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Acer Configuration Manager",
    "purpose":"Acer driver",
    "licenseType":"Free",
    "link":"https:\/\/www.acer.com\/ac\/en\/US\/content\/drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Acer Quick Access",
    "purpose":"Acer driver",
    "licenseType":"Free",
    "link":"https:\/\/www.acer.com\/ac\/en\/US\/content\/drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Acer UEIP Framework",
    "purpose":"Acer driver",
    "licenseType":"Free",
    "link":"https:\/\/www.acer.com\/ac\/en\/US\/content\/drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"CCC Help",
    "purpose":"Catalyst Graphics Adapter software configuration program for ATI graphic cards",
    "licenseType":"Free",
    "link":"https:\/\/www.amd.com\/en\/support\/kb\/faq\/ccc-install#faq-How-to-install-AMD-Catalyst%E2%84%A2-Drivers-in-a-Windows-10-based-system",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Ansel",
    "purpose":"Video driver",
    "licenseType":"Free",
    "link":"https:\/\/www.geforce.com\/hardware\/technology\/ansel",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Vulkan Run Time Libraries",
    "purpose":"Display card driver",
    "licenseType":"Free",
    "link":"https:\/\/developer.nvidia.com\/vulkan-driver",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Qualcomm Atheros",
    "purpose":"Qualcomm drivers for Windows",
    "licenseType":"Free",
    "link":"https:\/\/www.ath-drivers.eu\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"LM129",
    "purpose":"Printer Driver",
    "licenseType":"Free",
    "link":"https:\/\/www.driverdouble.com\/drivers\/lm129.html",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"HP Customer Participation Program 9.0",
    "purpose":"Printer Driver",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Universal CRT",
    "purpose":"Management application",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=48234",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"hppusgP1000",
    "purpose":"Printer Driver",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"MarketResearch",
    "purpose":"Hewlett-Packard",
    "licenseType":"Free",
    "link":"https:\/\/support.hp.com\/us-en\/drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"MrvlUsgTracking",
    "purpose":"Marvell Semiconductor Pvt Ltd",
    "licenseType":"Free",
    "link":"https:\/\/www.marvell.com\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"SHIELD Streaming",
    "purpose":"NVIDIA Corporation",
    "licenseType":"Free",
    "link":"https:\/\/www.geforce.com\/drivers",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"ccc-utility64",
    "purpose":"Catalyst Graphics Adapter software configuration program for ATI graphic cards",
    "licenseType":"Free",
    "link":"https:\/\/www.amd.com\/en\/support\/kb\/faq\/ccc-install#faq-How-to-install-AMD-Catalyst%E2%84%A2-Drivers-in-a-Windows-10-based-system",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Dashlane Upgrade Service",
    "purpose":"Driver",
    "licenseType":"Free",
    "link":"https:\/\/www.dashlane.com\/download#downloaded",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"HP PageWide Pro 477dw MFP",
    "purpose":"Printer Driver for Mac",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Realtek Ethernet Controller",
    "purpose":"Ehernet driver",
    "licenseType":"Free",
    "link":"https:\/\/support.lenovo.com\/us\/en\/downloads\/DS040366",
    "remarks":"Microsoft Windows 10 Enterprise"
  },
  {
    "type":"Driver",
    "name":"HP Scanner 3",
    "purpose":"Printer Driver for Mac",
    "licenseType":"Free",
    "link":"https:\/\/www.drivers.com\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"rastertofax",
    "purpose":"Printer Driver for Mac",
    "licenseType":"Free",
    "link":"https:\/\/www.drivers.com\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"fax",
    "purpose":"Printer Driver for Mac",
    "licenseType":"Free",
    "link":"https:\/\/www.drivers.com\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"hpPreProcessing",
    "purpose":"Printer Driver for Mac",
    "licenseType":"Free",
    "link":"https:\/\/www.drivers.com\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"commandtohp",
    "purpose":"management application for Ruby",
    "licenseType":"Free",
    "link":"https:\/\/www.drivers.com\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"ScanEventHandler",
    "purpose":"Printer Driver for Mac",
    "licenseType":"Free",
    "link":"https:\/\/www.drivers.com\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Maxx Audio Installer (x64)",
    "purpose":"Audio Driver",
    "licenseType":"Free",
    "link":"https:\/\/www.dell.com\/support\/home\/us\/en\/04\/drivers\/driversdetails?driverid=r70v3",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"ELAN FingerPrint",
    "purpose":"Fringer Print Driver",
    "licenseType":"Free",
    "link":"https:\/\/drivers.softpedia.com\/get\/KEYBOARD-and-MOUSE\/Elantech\/ELAN-Fingerprint-Driver-1-1-0-2111-for-Windows-10-Creators-Update.shtml",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Optoma HDCast Pro",
    "purpose":"Projector Driver",
    "licenseType":"Free",
    "link":"https:\/\/www.optoma.com\/hdcastpro\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Alphacard ID car printer driver",
    "purpose":"ID card printer driver",
    "licenseType":"Licensed",
    "link":"https:\/\/www.alphacard.com\/",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"Logi Options",
    "purpose":"Logitech Mouse Driver",
    "licenseType":"Free",
    "link":"https:\/\/www.logitech.com\/en-us\/product\/options",
    "remarks":" "
  },
  {
    "type":"File Compression",
    "name":"7-Zip",
    "purpose":"File archiver with a high compression ratio",
    "licenseType":"Free",
    "link":"https:\/\/www.7-zip.org\/download.html",
    "remarks":" "
  },
  {
    "type":"File Compression",
    "name":"The Unarchiver",
    "purpose":"Archive file extractor for MacOS",
    "licenseType":"Free",
    "link":"https:\/\/theunarchiver.com\/",
    "remarks":"#170559"
  },
  {
    "type":"File Compression",
    "name":"iZip",
    "purpose":"Archive file extractor for MacOS",
    "licenseType":"Free",
    "link":"https:\/\/itunes.apple.com\/us\/app\/izip-unarchiver-rar-7z-zip-decompressor\/id717545828?mt=12",
    "remarks":" "
  },
  {
    "type":"File Compression",
    "name":"7zip",
    "purpose":"Very high compression ratio file archiver",
    "licenseType":"Free",
    "link":"https:\/\/centos.pkgs.org\/7\/slce-x86_64\/p7zip-9.20.1-1.el7.x86_64.rpm.html",
    "remarks":" "
  },
  {
    "type":"File storage and backup",
    "name":"Google Drive",
    "purpose":"File storage and synchronization service ",
    "licenseType":"Free",
    "link":"https:\/\/www.google.com\/drive\/download\/",
    "remarks":" "
  },
  {
    "type":"File storage and backup",
    "name":"Google Drive File Stream",
    "purpose":"File storage and synchronization service ",
    "licenseType":"Free",
    "link":"https:\/\/www.google.com\/drive\/download\/",
    "remarks":" "
  },
  {
    "type":"File storage and backup",
    "name":"Backup and Sync from Google",
    "purpose":"Safely backups and synchronize files from goole drive",
    "licenseType":"Free",
    "link":"https:\/\/www.google.com\/drive\/download\/backup-and-sync\/",
    "remarks":" "
  },
  {
    "type":"File storage and backup",
    "name":"Google Drive Sync",
    "purpose":"Web based file storage and synchronization service",
    "licenseType":"Free",
    "link":"https:\/\/www.google.com\/drive\/download\/",
    "remarks":" "
  },
  {
    "type":"File storage and backup",
    "name":"Microsoft OneDrive",
    "purpose":"File storage and synchronization service ",
    "licenseType":"Free",
    "link":"https:\/\/onedrive.live.com\/",
    "remarks":" "
  },
  {
    "type":"File Transfer",
    "name":"S3 Browser",
    "purpose":"Windows client for Amazon S3 and Amazon CloudFront",
    "licenseType":"Free",
    "link":"http:\/\/s3browser.com\/",
    "remarks":" "
  },
  {
    "type":"File Transfer",
    "name":"Commander One",
    "purpose":"for s3 bucket",
    "licenseType":"Licensed",
    "link":"https:\/\/commander-one.en.softonic.com\/mac",
    "remarks":" "
  },
  {
    "type":"File Trasnfer",
    "name":"Transmit",
    "purpose":"For FTP client",
    "licenseType":"Licensed",
    "link":"https:\/\/panic.com\/transmit\/",
    "remarks":" "
  },
  {
    "type":"Healthcare",
    "name":"CareEnhance. Review Manager",
    "purpose":"Custom application needed to deploy for some client CM",
    "licenseType":"Licensed",
    "link":"https:\/\/um5.rchitexas.org:8087\/rm\/iqm\/html\/index.html?Admin=N&integration=&appType=CERME&locale=en_US&b2sw=N&",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"PyCharm CE",
    "purpose":"Integrated Development Environment for Python Developers",
    "licenseType":"Free",
    "link":"https:\/\/www.jetbrains.com\/pycharm\/download\/#section=linux",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"IntelliJ IDEA",
    "purpose":"Integrated Development Environment for JAVA Developers",
    "licenseType":"Licensed",
    "link":"https:\/\/www.jetbrains.com\/idea\/buy\/#edition=commercial",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"Intellij (Ultimate)",
    "purpose":"Integrated Development Environment for JAVA Developers",
    "licenseType":"Licensed",
    "link":"https:\/\/www.jetbrains.com\/idea\/buy\/#edition=commercial",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"Visual Studio",
    "purpose":"Integrated Development Environment based on Windows API",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cdw.com\/product\/Microsoft-Visual-Studio-Professional-2017-license-1-user\/4568487?RecommendedForEDC=4564659&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"Microsoft Visual C++",
    "purpose":"Included as part of Microsoft Visual Studio",
    "licenseType":"Free",
    "link":"https:\/\/support.microsoft.com\/en-us\/help\/2977003\/the-latest-supported-visual-c-downloads",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"Microsoft .NET",
    "purpose":"A development platform for building apps for web, and various OS",
    "licenseType":"Free",
    "link":"https:\/\/docs.microsoft.com\/en-us\/dotnet\/standard\/",
    "remarks":"|"
  },
  {
    "type":"IDE",
    "name":"IntelliJ Community Version        ",
    "purpose":"Hadoop\/ Spark",
    "licenseType":"Free",
    "link":"https:\/\/www.jetbrains.com\/idea\/download\/#section=linux",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"Visual Studio Code",
    "purpose":"A lightweight but powerful source code editor",
    "licenseType":"Free",
    "link":"https:\/\/code.visualstudio.com\/",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"python3-pip",
    "purpose":"Python Dependency",
    "licenseType":"Free",
    "link":"https:\/\/pypi.org\/project\/pip\/",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"pyoo",
    "purpose":"Python Dependency",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/seznam\/pyoo",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"boto",
    "purpose":"Python Dependency",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/boto\/boto",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"NetBeans",
    "purpose":"An integrated development environment for Java",
    "licenseType":"Free",
    "link":"http:\/\/netbeans.org\/downloads\/",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"Anaconda",
    "purpose":"Open source distribution of Python",
    "licenseType":"Free",
    "link":"https:\/\/www.anaconda.com\/download\/",
    "remarks":"#169551"
  },
  {
    "type":"IDE",
    "name":"Microsoft ASP.NET",
    "purpose":"Open-source server-side web application framework.",
    "licenseType":"Free",
    "link":"https:\/\/www.asp.net\/downloads",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"Active Directory Authentication Library",
    "purpose":"Installed by Visual Studio",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=48742 ",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"Microsoft NetStandard SDK",
    "purpose":"Extension tool for Visual Studio",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/net\/download",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"vs",
    "purpose":"Installed by Visual Studio",
    "licenseType":"Licensed",
    "link":"https:\/\/support.microsoft.com\/en-us\/help\/2977003\/the-latest-supported-visual-c-downloads",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"Roslyn Language Services",
    "purpose":"An extension to Visual Studio",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=34685",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"icecap",
    "purpose":"Installed by Visual Studio",
    "licenseType":"Licensed",
    "link":"https:\/\/support.microsoft.com\/en-us\/help\/2977003\/the-latest-supported-visual-c-downloads",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"MSI Development Tools",
    "purpose":"Installed by Visual Studio",
    "licenseType":"Licensed",
    "link":"https:\/\/support.microsoft.com\/en-us\/help\/2977003\/the-latest-supported-visual-c-downloads",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"DiagnosticsHub_CollectionService",
    "purpose":"Installed by Visual Studio",
    "licenseType":"Licensed",
    "link":"https:\/\/support.microsoft.com\/en-us\/help\/2977003\/the-latest-supported-visual-c-downloads",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"IntelliTraceProfilerProxy",
    "purpose":"Installed by Visual Studio",
    "licenseType":"Free",
    "link":"https:\/\/developercommunity.visualstudio.com\/content\/problem\/245109\/packageidmicrosoftintellitraceprofilerproxymsipack-4.html",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"code",
    "purpose":"Installed by Visual Studio",
    "licenseType":"Free",
    "link":"https:\/\/developercommunity.visualstudio.com\/content\/problem\/245109\/packageidmicrosoftintellitraceprofilerproxymsipack-4.html",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"Entity Framework 6.2.0 Tools for Visual Studio 2017",
    "purpose":"Installed by Visual Studio",
    "licenseType":"Free",
    "link":"https:\/\/developercommunity.visualstudio.com\/content\/problem\/245109\/packageidmicrosoftintellitraceprofilerproxymsipack-4.html",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"pycharm-community",
    "purpose":"The Most Intelligent Python IDE",
    "licenseType":"Free",
    "link":"https:\/\/www.jetbrains.com\/pycharm\/",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"JupyterLab",
    "purpose":"Primarily this would be for the machine learning team.",
    "licenseType":"Free",
    "link":"https:\/\/jupyter.org\/",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"RStudio",
    "purpose":"IDE for R",
    "licenseType":"Free",
    "link":"https:\/\/www.r-project.org\/",
    "remarks":" "
  },
  {
    "type":"Management application",
    "name":"RubyGems",
    "purpose":"management application for Ruby",
    "licenseType":"Free",
    "link":"https:\/\/www.heatware.net\/ruby-rails\/how-to-install-rubygems-linux-ubuntu-10\/",
    "remarks":" "
  },
  {
    "type":"Management application",
    "name":"libmysqlclient-dev",
    "purpose":"Installed by rubygems",
    "licenseType":"Free",
    "link":"https:\/\/www.heatware.net\/ruby-rails\/how-to-install-rubygems-linux-ubuntu-10\/",
    "remarks":" "
  },
  {
    "type":"Management application",
    "name":"NXLog-CE",
    "purpose":"collects and forwards Microsoft Windows events to Alienvault",
    "licenseType":"Free",
    "link":"https:\/\/nxlog.co\/products\/nxlog-community-edition\/download",
    "remarks":" "
  },
  {
    "type":"Media",
    "name":"VLC",
    "purpose":"Media Player",
    "licenseType":"Free",
    "link":"https:\/\/www.videolan.org\/vlc\/index.html",
    "remarks":" "
  },
  {
    "type":"Media",
    "name":"Sparkol VideoScribe",
    "purpose":"application used for creating whiteboard animation video.",
    "licenseType":"Licensed",
    "link":"https:\/\/www.videoscribe.co\/en\/Login?ReturnURL=\/en\/Download",
    "remarks":" "
  },
  {
    "type":"Media",
    "name":"QuickTime",
    "purpose":"Media Player",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com\/kb\/DL837?locale=en_GB",
    "remarks":" "
  },
  {
    "type":"Media",
    "name":"Apple Application Support",
    "purpose":"Installed by QuickTime",
    "licenseType":"Free",
    "link":"https:\/\/support.apple.com\/kb\/DL923?locale=en_GB",
    "remarks":" "
  },
  {
    "type":"Media",
    "name":"Adobe Fuse CC (Beta)",
    "purpose":"Video editing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Media",
    "name":"Adobe Media Encoder CC 2018",
    "purpose":"Video editing software application",
    "licenseType":"Licensed",
    "link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "remarks":" "
  },
  {
    "type":"Microsoft",
    "name":"Microsoft PowerPoint",
    "purpose":"Office Package for Mac",
    "licenseType":"Licensed",
    "link":"https:\/\/products.office.com\/en-ww\/mac",
    "remarks":" "
  },
  {
    "type":"Microsoft",
    "name":"Microsoft Excel",
    "purpose":"Office Package for Mac",
    "licenseType":"Licensed",
    "link":"https:\/\/products.office.com\/en-ww\/mac",
    "remarks":" "
  },
  {
    "type":"Microsoft",
    "name":"Microsoft Outlook",
    "purpose":"Office Package for Mac",
    "licenseType":"Licensed",
    "link":"https:\/\/products.office.com\/en-ww\/mac",
    "remarks":" "
  },
  {
    "type":"Microsoft",
    "name":"Microsoft OneNote",
    "purpose":"Office Package for Mac",
    "licenseType":"Licensed",
    "link":"https:\/\/products.office.com\/en-ww\/mac",
    "remarks":" "
  },
  {
    "type":"Microsoft",
    "name":"Microsoft Word",
    "purpose":"Office Package for Mac",
    "licenseType":"Licensed",
    "link":"https:\/\/products.office.com\/en-ww\/mac",
    "remarks":" "
  },
  {
    "type":"Microsoft",
    "name":"Microsoft AutoUpdate",
    "purpose":"Office Package for Mac",
    "licenseType":"Licensed",
    "link":"https:\/\/products.office.com\/en-ww\/mac",
    "remarks":" "
  },
  {
    "type":"Microsoft",
    "name":"Microsoft Teams",
    "purpose":"Office Package for Mac",
    "licenseType":"Licensed",
    "link":"https:\/\/products.office.com\/en-ww\/mac",
    "remarks":" "
  },
  {
    "type":"Microsoft",
    "name":"Microsoft Policy Platform",
    "purpose":"Needed to evaluate compliance settings.",
    "licenseType":"Free",
    "link":"https:\/\/docs.microsoft.com\/en-us\/sccm\/core\/clients\/deploy\/prerequisites-for-deploying-clients-to-windows-computers",
    "remarks":" "
  },
  {
    "type":"Microsoft",
    "name":"Microsoft Report Viewer 2012 Runtime",
    "purpose":"Report Viewer",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=35747",
    "remarks":" "
  },
  {
    "type":"Miscellaneous",
    "name":"WinRT Intellisense",
    "purpose":"Shareware software",
    "licenseType":"Free",
    "link":"https:\/\/winrt-intellisense-uap-en-us.updatestar.com\/en",
    "remarks":" "
  },
  {
    "type":"Miscellaneous",
    "name":"Google Music Player ",
    "purpose":"Music Player",
    "licenseType":"Free",
    "link":"https:\/\/www.googleplaymusicdesktopplayer.com\/",
    "remarks":" "
  },
  {
    "type":"Miscellaneous",
    "name":"Color Picker",
    "purpose":"Color combination tool",
    "licenseType":"Free",
    "link":"www.tucows.com\/preview\/1294630\/Color-Picker",
    "remarks":" "
  },
  {
    "type":"Mockup",
    "name":"Balsamiq",
    "purpose":"Mockup tool",
    "licenseType":"Licensed",
    "link":"https:\/\/balsamiq.com\/wireframes\/",
    "remarks":" "
  },
  {
    "type":"Mockup",
    "name":"WireframePro - Free Version",
    "purpose":"Mockup tool",
    "licenseType":"Free",
    "link":"https:\/\/mockflow.com\/desktop\/",
    "remarks":" "
  },
  {
    "type":"Mockup",
    "name":"Adobe XD - Free version",
    "purpose":"Mockup tool",
    "licenseType":"Free",
    "link":"https:\/\/www.adobe.com\/products\/xd.html?sdid=12B9F15S&mv=Search&ef_id=EAIaIQobChMI1uPA3POi4QIVzksNCh3NigdQEAAYASAAEgIQCfD_BwE:G:s&s_kwcid=AL!3085!3!315233774100!b!!g!!adobe%20xd%20free",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"Observium",
    "purpose":"SysLog and Network Monitoring",
    "licenseType":"Free",
    "link":"http:\/\/www.observium.org\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"Rancid",
    "purpose":"Config change tracker",
    "licenseType":"Free",
    "link":"http:\/\/www.shrubbery.net\/rancid\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"Belarc Advisor",
    "purpose":"IT Asset Management",
    "licenseType":"Free",
    "link":"https:\/\/www.belarc.com\/products_belarc_advisor",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"WinMTR",
    "purpose":"Network Diagnostic Tool",
    "licenseType":"Free",
    "link":"http:\/\/winmtr.net\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"mtr",
    "purpose":"Network Diagnostic Tool",
    "licenseType":"Free",
    "link":"https:\/\/www.tecmint.com\/mtr-a-network-diagnostic-tool-for-linux\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"WinBox",
    "purpose":"Mikrotik Administration Tool",
    "licenseType":"Free",
    "link":"https:\/\/mikrotik.com\/download",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"SmokePing",
    "purpose":"Network Latency Tracker",
    "licenseType":"Free",
    "link":"https:\/\/oss.oetiker.ch\/smokeping\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"NCell Connect",
    "purpose":"NCell's Internet dongle connection tool",
    "licenseType":"Free",
    "link":"https:\/\/www.ncell.axiata.com\/Internet\/Rates-and-Information\/How-to-setup-internet-in-my-computer",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"Angry IP Scanner",
    "purpose":"Angry IP Scanner - fast and friendly IP Scanner",
    "licenseType":"Free",
    "link":"http:\/\/angryip.org\/download\/#linux",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"ipscan",
    "purpose":"Angry IP Scanner - fast and friendly IP Scanner",
    "licenseType":"Free",
    "link":"http:\/\/angryip.org\/download\/#linux",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"SolarWinds SNMP Enabler for Windows",
    "purpose":"Remotely configure SNMP on Windows servers and workstations",
    "licenseType":"Free",
    "link":"https:\/\/www.solarwinds.com\/free-tools\/snmp-enabler-for-windows",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"Ossec",
    "purpose":"Free, open source host-based intrusion detection system (HIDS)",
    "licenseType":"Free",
    "link":"https:\/\/www.ossec.net\/downloads.html",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"SolarWinds Event Log Consolidator",
    "purpose":"Consolidates logs from up to five Windows servers or workstations.",
    "licenseType":"Free",
    "link":"https:\/\/www.solarwinds.com\/free-tools\/event-log-consolidator",
    "remarks":"#171059"
  },
  {
    "type":"Network",
    "name":"SolarWinds Event Log Forwarder for Windows",
    "purpose":"Forwards Windows event logs as syslog messages to any syslog service",
    "licenseType":"Free",
    "link":"https:\/\/www.solarwinds.com\/free-tools\/event-log-forwarder-for-windows",
    "remarks":"#171059"
  },
  {
    "type":"Network",
    "name":"ocsinventory-agent",
    "purpose":"Provides inventory of PCs (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/www.ocsinventory-ng.org\/en\/download-en\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"OCSNG",
    "purpose":"Provides inventory of PCs (MacOS)",
    "licenseType":"Free",
    "link":"https:\/\/www.ocsinventory-ng.org\/en\/download-en\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"OCS Inventory NG Agent",
    "purpose":"Provides inventory of PCs (WinOS)",
    "licenseType":"Free",
    "link":"https:\/\/www.ocsinventory-ng.org\/en\/download-en\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"OCS Inventory NG Agent 2.4.0.0",
    "purpose":"Provides inventory of PCs (WinOS)",
    "licenseType":"Free",
    "link":"https:\/\/www.ocsinventory-ng.org\/en\/download-en\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"ocsinventory-reports",
    "purpose":"Provides inventory of PCs",
    "licenseType":"Free",
    "link":"https:\/\/www.ocsinventory-ng.org\/en\/download-en\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"ocsinventory-server",
    "purpose":"Provides inventory of PCs",
    "licenseType":"Free",
    "link":"https:\/\/www.ocsinventory-ng.org\/en\/download-en\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"pbis agent",
    "purpose":"Used to join linux instances in AD",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/BeyondTrust\/pbis-open\/wiki",
    "remarks":"175531"
  },
  {
    "type":"Network",
    "name":"ZKTeco",
    "purpose":"Door Access Control Software",
    "licenseType":"Licensed",
    "link":"https:\/\/www.zkteco.com\/en\/product_category\/70.html",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"ZKAccess3.5 Security System",
    "purpose":"Door Access Control Software (updated software version)",
    "licenseType":"Licensed",
    "link":"https:\/\/www.zkteco.com\/en\/product_category\/70.html",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"Kantech",
    "purpose":"Door Access Control Software (updated software version)",
    "licenseType":"Licensed",
    "link":"http:\/\/www.kantech.com\/Products\/Default.aspx",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"Windows Firewall Configuration Provider",
    "purpose":"Used by SCCM to manage the Windows Firewall using a Group Policy ",
    "licenseType":"Free",
    "link":"https:\/\/www.prajwaldesai.com\/configuring-firewall-settings-for-configuration-manager-2012-r2\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"Configuration Manager Client",
    "purpose":"SCCM's client",
    "licenseType":"Free",
    "link":"https:\/\/www.prajwaldesai.com\/install-configuration-manager-clients-using-client-push\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"net-snmp",
    "purpose":"A collection of SNMP protocol tools and libraries",
    "licenseType":"Free",
    "link":"www.net-snmp.org\/download\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"jwhois",
    "purpose":"Internet whois\/nicname client",
    "licenseType":"Free",
    "link":"https:\/\/www.gnu.org\/software\/jwhois\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"fping",
    "purpose":"Scriptable, parallelized ping-like utility",
    "licenseType":"Free",
    "link":"https:\/\/fping.org",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"graphviz",
    "purpose":"Graph Visualization Tools",
    "licenseType":"Free",
    "link":"https:\/\/www.graphviz.org\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"postfix",
    "purpose":"Postfix Mail Transport Agent",
    "licenseType":"Free",
    "link":"www.postfix.org\/download.html",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"rrdtool",
    "purpose":"Round Robin Database Tool to store and display time-series data",
    "licenseType":"Free",
    "link":"https:\/\/oss.oetiker.ch\/rrdtool",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"mcrypt",
    "purpose":"Replacement for crypt()",
    "licenseType":"Free",
    "link":"https:\/\/sourceforge.net\/projects\/mcrypt\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"htop",
    "purpose":"Interactive process viewer",
    "licenseType":"Free",
    "link":"https:\/\/sourceforge.net\/projects\/htop\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"rsyslog",
    "purpose":"Enhanced system logging and kernel message trapping daemon",
    "licenseType":"Free",
    "link":"https:\/\/www.rsyslog.com\/downloads\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"freeradius",
    "purpose":"High-performance and highly configurable free RADIUS server",
    "licenseType":"Free",
    "link":"http:\/\/freeradius.net\/Downloads.html",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"samba-common",
    "purpose":"Files used by both Samba servers and clients",
    "licenseType":"Free",
    "link":"https:\/\/pkgs.org\/download\/samba-common",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"freerdp",
    "purpose":"Remote Desktop Protocol client",
    "licenseType":"Free",
    "link":"http:\/\/www.freerdp.com\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"amavisd",
    "purpose":"Email filter with virus scanner and spamassassin support",
    "licenseType":"Free",
    "link":"http:\/\/amavis.sourceforge.net\/download.php",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"perl-Razor-Agent",
    "purpose":"Use a Razor catalogue server to filter spam messages",
    "licenseType":"Free",
    "link":"https:\/\/centos.pkgs.org\/7\/epel-x86_64\/perl-Razor-Agent-2.85-15.el7.x86_64.rpm.html",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"spamassassin",
    "purpose":"Spam filter for email which can be invoked from mail delivery agents",
    "licenseType":"Free",
    "link":"https:\/\/sourceforge.net\/projects\/spamassassin\/",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"nessus",
    "purpose":"Nessus Scanner",
    "licenseType":"Licensed",
    "link":"https:\/\/docs.tenable.com\/nessus\/6_7\/Content\/DownloadNessus.htm",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"nginx",
    "purpose":"small, powerful, scalable web\/proxy server",
    "licenseType":"Free",
    "link":"http:\/\/nginx.net",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"tcpdump",
    "purpose":"command-line network traffic analyzer",
    "licenseType":"Free",
    "link":"http:\/\/www.tcpdump.org\/        ",
    "remarks":" "
  },
  {
    "type":"Operating System",
    "name":"MUI",
    "purpose":"Windows package that allows user to select the Windows language.",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com",
    "remarks":" "
  },
  {
    "type":"Plugin",
    "name":"Cracklib Password Check Plugin",
    "purpose":"To enforce the password strength in CM db servers",
    "licenseType":"Free",
    "link":"https:\/\/mariadb.com\/kb\/en\/library\/cracklib-password-check-plugin\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"LibreOffice",
    "purpose":"Office Suite",
    "licenseType":"Free",
    "link":"https:\/\/www.libreoffice.org\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"OpenOffice",
    "purpose":"Open-source office software suite",
    "licenseType":"Free",
    "link":"https:\/\/www.openoffice.org\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Wps Office",
    "purpose":"Free Office Suite",
    "licenseType":"Free",
    "link":"https:\/\/www.wps.com\/download\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Adobe Reader",
    "purpose":"PDF Document Reader",
    "licenseType":"Free",
    "link":"https:\/\/acrobat.adobe.com\/us\/en\/acrobat\/pdf-reader.html?promoid=C4SZ2XDR&mv=other",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Microsoft Office",
    "purpose":"Mircosoft Office Suite",
    "licenseType":"Licensed",
    "link":"https:\/\/www.microsoft.com\/en-us\/store\/d\/office-professional-2016\/cfq7ttc0k5f8?activetab=pivot:overviewtab",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Microsoft Visio",
    "purpose":"Organizational Chart, Workflows",
    "licenseType":"Licensed",
    "link":"https:\/\/www.ecrater.com\/p\/30322707\/microsoft-visio-professional-2016-lifetime-license?keywords=microsoft+visio",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"WordWeb",
    "purpose":"Free English dictionary and thesaurus",
    "licenseType":"Free",
    "link":"https:\/\/wordweb.info\/free\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Foxit Reader",
    "purpose":"PDF reader ",
    "licenseType":"Free",
    "link":"https:\/\/www.foxitsoftware.com\/downloads\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Acrobat Update Helper",
    "purpose":"PDF reader",
    "licenseType":"Free",
    "link":"https:\/\/acrobat.adobe.com\/us\/en\/acrobat\/pdf-reader.html?promoid=C4SZ2XDR&mv=other",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Adobe Application",
    "purpose":"Component of Adobe",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Adobe CEF",
    "purpose":"Component of Adobe",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Adobe Desktop",
    "purpose":"Component of Adobe",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"AdobeIPCBroker",
    "purpose":"Component of Adobe",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"adobe_lic",
    "purpose":"Component of Adobe",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Adobe Update",
    "purpose":"Component of Adobe",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Creative Cloud",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Core Sync",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"CCXP",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"CORE_1_0_32",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"CORG_1_1_32",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"COPS_1_0_32",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"COCM_1_0_32",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"ACR_11_1",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"PHSP_20_0_1",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"CCXP_2_5_2",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"COSY",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Creative Cloud Desktop App",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"LogTransport2",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"AASIapp",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"AAM ",
    "purpose":"Component of Adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"calibre",
    "purpose":"Ebook reader for some of the programming books.",
    "licenseType":"Free",
    "link":"https:\/\/calibre-ebook.com",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Flycut",
    "purpose":"Clipboard app for MAC to store multiple cut items.",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/TermiT\/Flycut",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"GAuth Authenticator",
    "purpose":"2 step verification",
    "licenseType":"Free",
    "link":"https:\/\/itunes.apple.com\/us\/app\/google-authenticator\/id388497605?mt=8",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Adobe Acrobat Updater",
    "purpose":"Component of Adobe",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"AAMLauncherUtil",
    "purpose":"Component of Adobe",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":"macOS"
  },
  {
    "type":"Productivity",
    "name":"fluxgui",
    "purpose":"Needed for blue screen glare reflection after sunset hours.",
    "licenseType":"Free",
    "link":"https:\/\/justgetflux.com\/linux.html",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Text Expander",
    "purpose":"Expanding predefined text in text editor and emails",
    "licenseType":"Licensed",
    "link":"https:\/\/textexpander.com\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Default Folder",
    "purpose":"Makes Open and Save dialogs work as quickly as you do",
    "licenseType":"Licensed",
    "link":"https:\/\/www.stclairsoft.com\/DefaultFolderX\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"CleanMyMac",
    "purpose":"MAC cleaning tool",
    "licenseType":"Licensed",
    "link":"https:\/\/macpaw.com\/cleanmymac-3",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Evernote - Free version",
    "purpose":"Taking and storing notes",
    "licenseType":"Free",
    "link":"https:\/\/evernote.com\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"tint2",
    "purpose":"Open source taskbar for Linux",
    "licenseType":"Free",
    "link":"https:\/\/pkgs.org\/download\/tint2",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Flux",
    "purpose":"Control screen colour to suit your eyes",
    "licenseType":"Free",
    "link":"https:\/\/justgetflux.com\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Grammarly",
    "purpose":"grammar checker software",
    "licenseType":"Licensed",
    "link":"https:\/\/www.grammarly.com\/?q=brand&utm_source=google&utm_medium=cpc&utm_campaign=brand_f1&utm_content=229881030226&utm_term=grammarly%20for%20mac&matchtype=e&placement=&network=g&gclid=EAIaIQobChMIv-r32P6Z4AIVT6aWCh32EwaPEAAYASAAEgKG1fD_BwE",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"LockLizard",
    "purpose":"PDF opening tool",
    "licenseType":"Licensed",
    "link":"https:\/\/www.locklizard.com\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"1Password",
    "purpose":"Password management",
    "licenseType":"Licensed",
    "link":"https:\/\/support.1password.com\/explore\/whats-new-mac\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Fantasticals",
    "purpose":"Calendar utility",
    "licenseType":"Licensed",
    "link":"https:\/\/flexibits.com\/fantastical",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Paste",
    "purpose":"Copy past utility",
    "licenseType":"Licensed",
    "link":"https:\/\/pasteapp.me\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Things 3",
    "purpose":"Productivity Tool",
    "licenseType":"Licensed",
    "link":"https:\/\/apps.apple.com\/us\/app\/things-3\/id904280696?mt=12",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Yoink",
    "purpose":"File Explorer",
    "licenseType":"Licensed",
    "link":"https:\/\/eternalstorms.at\/yoink\/mac\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"XQuartz",
    "purpose":"develop a version of the X.Org X Window System",
    "licenseType":"Free",
    "link":"https:\/\/www.xquartz.org\/",
    "remarks":" "
  },
  {
    "type":"Programming Language",
    "name":"Python",
    "purpose":"Python is a programming language",
    "licenseType":"Free",
    "link":"https:\/\/www.python.org\/downloads\/",
    "remarks":" "
  },
  {
    "type":"Programming Language",
    "name":"IDLE",
    "purpose":"Installed by Python",
    "licenseType":"Free",
    "link":"https:\/\/www.python.org\/downloads\/",
    "remarks":" "
  },
  {
    "type":"Programming Language",
    "name":"Python Launcher",
    "purpose":"Python is a programming language",
    "licenseType":"Free",
    "link":"https:\/\/www.python.org\/downloads\/",
    "remarks":" "
  },
  {
    "type":"Programming Language",
    "name":"PHP",
    "purpose":"Server side scripting language",
    "licenseType":"Free",
    "link":"http:\/\/www.php.net\/downloads.php",
    "remarks":" "
  },
  {
    "type":"Programming Language",
    "name":"Scala",
    "purpose":"Development",
    "licenseType":"Free",
    "link":"https:\/\/www.scala-lang.org\/",
    "remarks":" "
  },
  {
    "type":"Programming Language",
    "name":"DownloadX ActiveX",
    "purpose":"Microsoft's object-oriented programming tool for IE",
    "licenseType":"Free",
    "link":"https:\/\/download.cnet.com\/DownloadX-ActiveX-Download-Control\/3000-2206_4-10911713.html",
    "remarks":" "
  },
  {
    "type":"Programming Language",
    "name":"Node.js",
    "purpose":"JavaScript runtime open source server environment.",
    "licenseType":"Free",
    "link":"https:\/\/nodejs.org\/en\/",
    "remarks":" "
  },
  {
    "type":"Programming Language",
    "name":"R Project",
    "purpose":"programming language",
    "licenseType":"Free",
    "link":"https:\/\/www.r-project.org\/",
    "remarks":" "
  },
  {
    "type":"Programming Language",
    "name":"python2.7",
    "purpose":"Interactive high-level object-oriented language (version 2.7)",
    "licenseType":"Free",
    "link":"https:\/\/www.python.org\/downloads\/",
    "remarks":" "
  },
  {
    "type":"Programming Language",
    "name":"python3.5",
    "purpose":"Interactive high-level object-oriented language (version 3.5)",
    "licenseType":"Free",
    "link":"https:\/\/www.python.org\/downloads\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"SSH Secure Shell",
    "purpose":"SSH ",
    "licenseType":"Free",
    "link":"https:\/\/www.ssh.com\/ssh\/download\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"PuTTY",
    "purpose":"Network file transfer application",
    "licenseType":"Free",
    "link":"https:\/\/www.putty.org\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"OpenVPN",
    "purpose":"Secure connection",
    "licenseType":"Free",
    "link":"https:\/\/openvpn.net\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"OpenVPN Connect",
    "purpose":"Secure connection",
    "licenseType":"Free",
    "link":"https:\/\/openvpn.net\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"Uninstall OpenVPN Connect",
    "purpose":"Secure connection",
    "licenseType":"Free",
    "link":"https:\/\/openvpn.net\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"TAP-Windows 9.24.2",
    "purpose":"Secure connection",
    "licenseType":"Free",
    "link":"https:\/\/openvpn.net\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"Progeny Authenticator",
    "purpose":"Progeny Authenticator is an application created by Progeny for 2 factor authentication for access to their application called 'Baby Trax 1.5",
    "licenseType":"Free",
    "link":"https:\/\/dev.babytrax.net\/progenyauthenticator\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"MobaXterm",
    "purpose":"Better tool for SSH from Windows machines. ",
    "licenseType":"Free",
    "link":"https:\/\/mobaxterm.mobatek.net\/download.html",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"NordVPN IKE",
    "purpose":"VPN connect",
    "licenseType":"Licensed",
    "link":"https:\/\/nordvpn.com\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"TeamViewer",
    "purpose":"Remote desktop software",
    "licenseType":"Free",
    "link":"https:\/\/www.teamviewer.com\/en\/download\/windows\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"Tunnelblick",
    "purpose":"OpenVPN VPN client server",
    "licenseType":"Free",
    "link":"https:\/\/tunnelblick.net\/downloads.html",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"Viscosity",
    "purpose":"OpenVPN VPN client server",
    "licenseType":"Licensed",
    "link":"https:\/\/www.ovpn.com\/en\/guides\/mac-viscosity",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"Microsoft Remote Desktop Beta",
    "purpose":"Remote desktop software",
    "licenseType":"Free",
    "link":"https:\/\/www.drivers.com\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"Microsoft Remote Desktop",
    "purpose":"Remote desktop software",
    "licenseType":"Free",
    "link":"https:\/\/www.drivers.com\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"openvpn",
    "purpose":"virtual private network daemon",
    "licenseType":"Free",
    "link":"http:\/\/www.openvpn.net\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection ",
    "name":"Cisco AnyConnect ",
    "purpose":"Provides VPN access through SSL and IPsec IKEv2",
    "licenseType":"Free",
    "link":"https:\/\/www.cisco.com\/c\/en\/us\/support\/security\/anyconnect-secure-mobility-client-v4-x\/model.html",
    "remarks":" "
  },
  {
    "type":"Remote Connection ",
    "name":"vpndownloader",
    "purpose":"Download Cisco vpn",
    "licenseType":"Free",
    "link":"https:\/\/www.cisco.com\/c\/en\/us\/support\/security\/anyconnect-secure-mobility-client\/tsd-products-support-series-home.html",
    "remarks":" "
  },
  {
    "type":"Revision Control",
    "name":"CVS",
    "purpose":"Version control system",
    "licenseType":"Free",
    "link":"http:\/\/cvs.nongnu.org\/",
    "remarks":" "
  },
  {
    "type":"Revision Control",
    "name":"Git Bash",
    "purpose":"Command line programs which allow you to interface with the underlying git progra",
    "licenseType":"Free",
    "link":"https:\/\/git-scm.com\/downloads",
    "remarks":" "
  },
  {
    "type":"Revision Control",
    "name":"GIT ",
    "purpose":"Software to handle project processes with efficiency and speed",
    "licenseType":"Free",
    "link":"https:\/\/git-scm.com\/",
    "remarks":" "
  },
  {
    "type":"Revision Control",
    "name":"git",
    "purpose":"Fast Version Control System",
    "licenseType":"Free",
    "link":"https:\/\/git-scm.com\/",
    "remarks":" "
  },
  {
    "type":"Revision Control",
    "name":"Meld",
    "purpose":"Compare files, directories, and version controlled projects",
    "licenseType":"Free",
    "link":"http:\/\/meldmerge.org\/",
    "remarks":"#96693"
  },
  {
    "type":"Revision Control",
    "name":"WinMerge",
    "purpose":"differencing and merging tool for Windows",
    "licenseType":"Free",
    "link":"http:\/\/winmerge.org\/",
    "remarks":" "
  },
  {
    "type":"Revision Control",
    "name":"subversion",
    "purpose":"A Modern Concurrent Version Control System",
    "licenseType":"Free",
    "link":"https:\/\/sourceforge.net\/projects\/subversion\/",
    "remarks":" "
  },
  {
    "type":"Screenshot",
    "name":"Snagit",
    "purpose":"Take Screenshot",
    "licenseType":"Licensed",
    "link":"https:\/\/www.techsmith.com\/store\/snagit?utm_source=google&utm_medium=cpc&utm_campaign=1524774662&utm_content=58548122295&utm_term=snagit&gclid=EAIaIQobChMI78GU_fGi4QIVjLbICh25eA1kEAAYASAAEgL-dvD_BwE",
    "remarks":" "
  },
  {
    "type":"Security",
    "name":"EncryptMe",
    "purpose":"Used for encryption in MAC",
    "licenseType":"Licensed",
    "link":"https:\/\/www.encrypt.me\/",
    "remarks":" "
  },
  {
    "type":"Security",
    "name":"GNU Privacy Assistant",
    "purpose":"encrypt the client dump files using keys provided by different clients",
    "licenseType":"Free",
    "link":"https:\/\/gnupg.org\/download\/",
    "remarks":" "
  },
  {
    "type":"Security",
    "name":"OWASP Zed Attack Proxy 2.7.0",
    "purpose":"Rind security vulnerabilities in the web applications while developing and testing the application",
    "licenseType":"Free",
    "link":"https:\/\/www.owasp.org\/index.php\/OWASP_Zed_Attack_Proxy_Project",
    "remarks":" "
  },
  {
    "type":"Software Platform",
    "name":"Java",
    "purpose":"System for developing and deploying application software",
    "licenseType":"Free",
    "link":"https:\/\/java.com\/en\/download\/",
    "remarks":" "
  },
  {
    "type":"Software Platform",
    "name":"JDK",
    "purpose":"Java development kit",
    "licenseType":"Free",
    "link":"https:\/\/www.oracle.com\/technetwork\/java\/javase\/downloads\/jdk8-downloads-2133151.html",
    "remarks":" "
  },
  {
    "type":"Software Platform",
    "name":"java-common",
    "purpose":"Base package for Java runtimes",
    "licenseType":"Free",
    "link":"https:\/\/java.com\/en\/download\/",
    "remarks":" "
  },
  {
    "type":"Software Service ",
    "name":"Google Update Helper",
    "purpose":"Checks for software updates and automatically downloads and install ",
    "licenseType":"Free",
    "link":"https:\/\/www.google.com\/about\/products\/",
    "remarks":" "
  },
  {
    "type":"Sotware API SDK",
    "name":"Dolby Audio X2 Windows API SDK",
    "purpose":"Registry entry that runs on each Windows boot for all user logins",
    "licenseType":"Free",
    "link":"https:\/\/www.dolby.com",
    "remarks":" "
  },
  {
    "type":"Sotware Service ",
    "name":"Google Update",
    "purpose":"Keeps Google based software up to date",
    "licenseType":"Free",
    "link":"https:\/\/www.google.co.in\/chrome\/index.html",
    "remarks":" "
  },
  {
    "type":"Sync tool",
    "name":"Rclone",
    "purpose":"Syncing to team drive",
    "licenseType":"Free",
    "link":"https:\/\/rclone.org\/",
    "remarks":" "
  },
  {
    "type":"Terminal Program",
    "name":"guake",
    "purpose":"Terminal",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/Guake\/guake",
    "remarks":" "
  },
  {
    "type":"Terminal Program",
    "name":"iterm",
    "purpose":"Terminal for Mac",
    "licenseType":"Free",
    "link":"https:\/\/www.iterm2.com\/downloads.html",
    "remarks":" "
  },
  {
    "type":"Terminal Program",
    "name":"iTerm2",
    "purpose":"Terminal for Mac",
    "licenseType":"Free",
    "link":"https:\/\/iterm2.com\/downloads\/stable\/latest",
    "remarks":" "
  },
  {
    "type":"Terminal Program",
    "name":"MiniTerm",
    "purpose":"Terminal Program",
    "licenseType":"Free",
    "link":"https:\/\/gist.github.com\/bewest\/4632563",
    "remarks":" "
  },
  {
    "type":"Testing Tool",
    "name":"Katalon Studio",
    "purpose":"Performing automated tests",
    "licenseType":"Free",
    "link":"https:\/\/www.katalon.com\/",
    "remarks":" "
  },
  {
    "type":"Text Editor",
    "name":"Notepad++",
    "purpose":"Editing text also used for source code edit",
    "licenseType":"Free",
    "link":"https:\/\/notepad-plus-plus.org\/",
    "remarks":" "
  },
  {
    "type":"Text Editor",
    "name":"notepadqq",
    "purpose":"Source code editor and Notepad replacement",
    "licenseType":"Free",
    "link":"https:\/\/notepadqq.com\/s\/",
    "remarks":" "
  },
  {
    "type":"Text Editor",
    "name":"Sublime Text",
    "purpose":"Editing text also used for source code edit",
    "licenseType":"Free",
    "link":"https:\/\/www.sublimetext.com\/",
    "remarks":" "
  },
  {
    "type":"Text Editor",
    "name":"sublime-text        ",
    "purpose":"Sublime Text 2        ",
    "licenseType":"Free",
    "link":"https:\/\/www.sublimetext.com\/",
    "remarks":" "
  },
  {
    "type":"Text Editor",
    "name":"EDI notepad",
    "purpose":"EDI file reader",
    "licenseType":"Free",
    "link":"my ",
    "remarks":" "
  },
  {
    "type":"Text Editor",
    "name":"EmEditor",
    "purpose":"Text Editor",
    "licenseType":"Free",
    "link":"https:\/\/www.emeditor.com\/download\/",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Adobe Flash Player",
    "purpose":"Used to view multimedia content",
    "licenseType":"Free",
    "link":"https:\/\/www.adobe.com\/products\/flashplayer.html",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Adobe Refresh Manager",
    "purpose":"Launch adobe softwares on boot through a Windows Schedule Task ",
    "licenseType":"Free",
    "link":"https:\/\/www.adobe.com",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Adobe Shockwave Player",
    "purpose":"Software plug-in for viewing multimedia and video games in web pages",
    "licenseType":"Free",
    "link":"https:\/\/www.adobe.com\/products\/shockwaveplayer.html",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Google Input",
    "purpose":"Input method editor to enter text in any of the supported languages",
    "licenseType":"Free",
    "link":"https:\/\/www.google.com\/inputtools\/",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"adobe-flashplugin",
    "purpose":"needed for web browser (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/get.adobe.com\/flashplayer\/",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"artha",
    "purpose":"Needed as offline dictionary for English words (Ubuntu)",
    "licenseType":"Free",
    "link":"http:\/\/artha.sourceforge.net\/wiki\/index.php\/Download",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"banshee",
    "purpose":"Music Player (Ubuntu)",
    "licenseType":"Free",
    "link":"http:\/\/banshee.fm\/download\/",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"banshee-extension-soundmenu",
    "purpose":"Music Player (Ubuntu)",
    "licenseType":"Free",
    "link":"http:\/\/banshee.fm\/download\/",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"clementine",
    "purpose":"https:\/\/adoptopenjdk.net\/",
    "licenseType":"Free",
    "link":"https:\/\/www.clementine-player.org\/downloads",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Spotify",
    "purpose":"Music Player (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/www.spotify.com",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"cryptsetup",
    "purpose":"disk encryption (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/packages.ubuntu.com\/trusty\/admin\/cryptsetup",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"cryptsetup-bin",
    "purpose":"disk encryption (Ubuntu)",
    "licenseType":"Free",
    "link":"https:\/\/packages.ubuntu.com\/trusty\/admin\/cryptsetup",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"audacity",
    "purpose":"Audio editor.",
    "licenseType":"Free",
    "link":"https:\/\/www.audacityteam.org\/download\/linux\/",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"audacity-data",
    "purpose":"Audio editor.",
    "licenseType":"Free",
    "link":"https:\/\/www.audacityteam.org\/download\/linux\/",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"KolourPaint",
    "purpose":"Same as windows paint, a small image editing tool",
    "licenseType":"Free",
    "link":"http:\/\/kolourpaint.org\/",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Application Verifier",
    "purpose":"detect and help debug memory corruptions and critical security vulnerabilities",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=20028",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Color Cop",
    "purpose":"free multi-purpose color picker",
    "licenseType":"Free",
    "link":"http:\/\/colorcop.net\/license\/",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"mythes",
    "purpose":"English thesaurus",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/hunspell\/mythes",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"madan-fonts",
    "purpose":"Font for Nepali language",
    "licenseType":"Free",
    "link":"https:\/\/download.com.np\/",
    "remarks":" "
  },
  {
    "type":"Virtualization",
    "name":"VMware",
    "purpose":"For virtual machines",
    "licenseType":"Free",
    "link":"https:\/\/my.vmware.com\/en\/web\/vmware\/evalcenter?p=free-esxi6",
    "remarks":" "
  },
  {
    "type":"Vulnaribility Scanner",
    "name":"Burp",
    "purpose":"Web vulnerability scanner",
    "licenseType":"Licensed",
    "link":"https:\/\/portswigger.net\/burp",
    "remarks":" "
  },
  {
    "type":"Web based Development platform",
    "name":"XAMPP",
    "purpose":"Apache distribution containing MariaDB, PHP, and Perl",
    "licenseType":"Free",
    "link":"https:\/\/www.apachefriends.org\/index.html",
    "remarks":" "
  },
  {
    "type":"Web based Development platform",
    "name":"connect",
    "purpose":"Installed by XAMPP in mac",
    "licenseType":"Free",
    "link":"https:\/\/www.apachefriends.org\/index.html",
    "remarks":" "
  },
  {
    "type":"Web based Development platform",
    "name":"Tomcat",
    "purpose":"Implements Java Servlet, JavaServer Pages (JSP)",
    "licenseType":"Free",
    "link":"http:\/\/tomcat.apache.org\/",
    "remarks":" "
  },
  {
    "type":"Web based Development platform",
    "name":"Apache",
    "purpose":"Software to develop and maintain an open-source HTTP server",
    "licenseType":"Free",
    "link":"https:\/\/httpd.apache.org\/",
    "remarks":" "
  },
  {
    "type":"Web based Development platform",
    "name":"Web Deploy",
    "purpose":"Required for web deployment of  ASP.NET applications ",
    "licenseType":"Free",
    "link":"https:\/\/www.iis.net\/downloads\/microsoft\/web-deploy",
    "remarks":" "
  },
  {
    "type":"Web based Development platform",
    "name":"IIS",
    "purpose":"Microsoft's web server",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=48264",
    "remarks":" "
  },
  {
    "type":"Web based Development platform",
    "name":"Microsoft Web Platform Installer",
    "purpose":"For adding Web Deploy component for IIS.",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/web\/downloads\/platform.aspx",
    "remarks":" "
  },
  {
    "type":"Web based Development platform",
    "name":"MAMP",
    "purpose":"Local webserver",
    "licenseType":"Free",
    "link":"https:\/\/www.mamp.info\/en\/downloads\/",
    "remarks":" "
  },
  {
    "type":"Web based Service",
    "name":"LastPass",
    "purpose":"Web based password management service ",
    "licenseType":"Licensed",
    "link":"https:\/\/www.lastpass.com\/business-password-manager",
    "remarks":" "
  },
  {
    "type":"Web Development platform",
    "name":"WAMP",
    "purpose":"Software stack to create web applications",
    "licenseType":"Free",
    "link":"http:\/\/www.wampserver.com\/en\/",
    "remarks":" "
  },
  {
    "type":"WebDriver and Remote Control",
    "name":"Selenium ",
    "purpose":"Selenium automates browsers",
    "licenseType":"Free",
    "link":"https:\/\/www.seleniumhq.org\/download\/",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Microsoft Windows 10 ",
    "purpose":"Operating System",
    "licenseType":"Licensed",
    "link":"https:\/\/www.microsoft.com\/en-gb\/evalcenter\/evaluate-windows-10-enterprise",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Microsoft Windows Server 2016",
    "purpose":"Operating System",
    "licenseType":"Licensed",
    "link":"https:\/\/www.microsoft.com\/en-in\/evalcenter\/evaluate-windows-server-2016",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Office 16 Click-to-Run",
    "purpose":"Mircrosoft Office installer",
    "licenseType":"Licensed",
    "link":"https:\/\/www.microsoft.com",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"osrss",
    "purpose":"Microsoft update patch",
    "licenseType":"Free",
    "link":"https:\/\/support.microsoft.com\/en-us\/help\/3159635\/windows-10-update-assistant",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Update KB",
    "purpose":"Mircosoft periodic patches and updates",
    "licenseType":"Licensed",
    "link":"https:\/\/www.microsoft.com",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Windows 10 Update Assistant",
    "purpose":"Windows 10 update assistant",
    "licenseType":"Free",
    "link":"https:\/\/support.microsoft.com\/en-us\/help\/3159635\/windows-10-update-assistant",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Update for Windows",
    "purpose":"Windows updates",
    "licenseType":"Free",
    "link":"https:\/\/support.microsoft.com\/en-us\/help\/3159635\/windows-10-update-assistant",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Windows SDK",
    "purpose":"Software development kits (SDKs) from Microsoft",
    "licenseType":"Free",
    "link":"https:\/\/developer.microsoft.com\/en-us\/windows\/downloads\/windows-10-sdk",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Microsoft Help Viewer",
    "purpose":"Offline help system (local help) developed by Microsoft",
    "licenseType":"Free",
    "link":"https:\/\/docs.microsoft.com\/en-us\/visualstudio\/ide\/microsoft-help-viewer",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Microsoft MPI",
    "purpose":"Microsoft implementation of the Message Passing Interface standard",
    "licenseType":"Free",
    "link":"https:\/\/docs.microsoft.com\/en-us\/message-passing-interface\/microsoft-mpi",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Microsoft Application Error Reporting",
    "purpose":"Crash reporting technology by Microsoft",
    "licenseType":"Free",
    "link":"https:\/\/social.microsoft.com\/Forums\/en-US\/268910ec-9107-4c89-bb2a-7ded1b6a9ad6\/install-microsoft-application-error-reporting-tool?forum=crmdeployment",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Microsoft Portable Library",
    "purpose":"Targeting Pack for Microsoft .NET Framework",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=27757",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Microsoft Windows Communication Foundation",
    "purpose":"Framework for building service-oriented applications by Microsoft",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=21459",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Microsoft Build Tools",
    "purpose":"Essential tools for building managed applications.",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=48159",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"SDK",
    "purpose":"provides the latest headers, libraries, metadata, and tools for building Windows 10 apps",
    "licenseType":"Free",
    "link":"https:\/\/developer.microsoft.com\/en-us\/windows\/downloads\/windows-10-sdk",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Microsoft Sync Framework Runtime",
    "purpose":"enabling collaboration and offline scenarios for applications, services and devices",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=17616",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Windows App Certification",
    "purpose":"test your app for Windows",
    "licenseType":"Free",
    "link":"https:\/\/developer.microsoft.com\/en-us\/windows\/develop\/app-certification-kit",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Windows Software Development Kit",
    "purpose":"provides the latest headers, libraries, metadata, and tools for building Windows 10 apps",
    "licenseType":"Free",
    "link":"https:\/\/developer.microsoft.com\/en-us\/windows\/downloads\/windows-10-sdk",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Kits Configuration Installer",
    "purpose":"provides the latest headers, libraries, metadata, and tools for building Windows 10 apps",
    "licenseType":"Free",
    "link":"https:\/\/developer.microsoft.com\/en-us\/windows\/downloads\/windows-10-sdk",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"WinAppDeploy",
    "purpose":"command line tool that can use to deploy a Universal Windows Platform (UWP) app from a Windows 10 PC",
    "licenseType":"Free",
    "link":"https:\/\/winappdeploy.updatestar.com\/en",
    "remarks":" "
  },
  {
    "type":"Windows Operating System",
    "name":"Microsoft Web Platform Installer",
    "purpose":"WebPI provides a simplified installation workflow for installing common open source web applications and web platform technologies",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/web\/downloads\/platform.aspx",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Chrysanth Cheque Writer [Free] for Nepal",
    "purpose":"For check printing",
    "licenseType":"Free",
    "link":"https:\/\/en.freedownloadmanager.org\/Windows-PC\/Chrysanth-Cheque-Writer-FREE.html",
    "remarks":" "
  },
  {
    "type":"Printer Driver",
    "name":"EPSON LQ-310 ESC\/P2 Printer Utility Uninstall",
    "purpose":"Printer Driver",
    "licenseType":"Free",
    "link":"https:\/\/www.epson.com.sg\/Support\/Printers\/Dot-Matrix-Printers\/LQ-Series\/Epson-LQ-310\/s\/SPT_C11CC25301?review-filter=Windows+7+32-bit",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Windows Admin Center",
    "purpose":"browser-based app for managing servers, clusters, hyper-converged infrastructure, and Windows 10 PCs",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/cloud-platform\/windows-admin-center",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Startups VMS",
    "purpose":"remote connection for NVR",
    "licenseType":"Free",
    "link":"http:\/\/muinintl.com\/downloads\/",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Cinema 4D R21",
    "purpose":"package for all 3D artists (installed by adobe)",
    "licenseType":"Free",
    "link":"https:\/\/www.maxon.net\/en-us\/support\/downloads\/",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"ACCFinderBundleLoader",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"CC Troubleshooter",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"CCXProcess",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Analyze Documents",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"ATFViewer",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"c4dpy",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Cineware",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Commandline",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Contact Sheets",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Export Flash Animation",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Make Calendar",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"naib",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Template",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Web Gallery",
    "purpose":"installed by adobe",
    "licenseType":"Free",
    "link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "remarks":" "
  },
  {
    "type":"Management application",
    "name":"RVM",
    "purpose":"Command-line tool to manage ruby environments",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/rvm\/ubuntu_rvm",
    "remarks":" "
  },
  {
    "type":"Management application",
    "name":"Bundler",
    "purpose":"Manages an application's dependencies through its entire life.",
    "licenseType":"Free",
    "link":"https:\/\/rubygems.org\/gems\/bundler\/versions\/2.0.2",
    "remarks":" "
  },
  {
    "type":"CCTV Camera Software ",
    "name":"VMS",
    "purpose":"For CCTV streaming and storing videos",
    "licenseType":"Free",
    "link":"https:\/\/www.unifore.net\/analog-surveillance\/xmeye-for-windows-mac-pc-software-vms.html",
    "remarks":" "
  },
  {
    "type":"CCTV Camera Software ",
    "name":"CMS",
    "purpose":"For CCTV streaming and storing videos",
    "licenseType":"Free",
    "link":"https:\/\/www.unifore.net\/analog-surveillance\/xmeye-for-windows-mac-pc-software-vms.html",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Forcepoint DLP Endpoint",
    "purpose":"Data Loss Prevention (DLP) tool",
    "licenseType":"Licensed",
    "link":"https:\/\/support.forcepoint.com\/Login?startURL=%2FDownloads",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"FORCEPOINT ONE ENDPOINT",
    "purpose":"Data Loss Prevention (DLP) tool",
    "licenseType":"Licensed",
    "link":"https:\/\/support.forcepoint.com\/Login?startURL=%2FDownloads",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Forcepoint Decryption Utility",
    "purpose":"Data Loss Prevention (DLP) tool",
    "licenseType":"Licensed",
    "link":"https:\/\/support.forcepoint.com\/Login?startURL=%2FDownloads",
    "remarks":" "
  },
  {
    "type":"Database ",
    "name":"redis",
    "purpose":"in-memory data structure store",
    "licenseType":"Free",
    "link":"dbforge-sq-decrypter-3.1.24-installer_I0-B5J1.exe",
    "remarks":" "
  },
  {
    "type":"Angular",
    "name":"Angular ",
    "purpose":"an app-design framework and development platform",
    "licenseType":"Free",
    "link":"https:\/\/angular.io\/",
    "remarks":" "
  },
  {
    "type":"IDE",
    "name":"VisualVM",
    "purpose":"All-in-One Java Troubleshooting Tool",
    "licenseType":"Free",
    "link":"https:\/\/visualvm.github.io\/download.html",
    "remarks":" "
  },
  {
    "type":"Webex Client",
    "name":"voipclientmac",
    "purpose":"Call with Comcast",
    "licenseType":"Free",
    "link":"https:\/\/conferencebridge.comcast.com\/webexclients\/VoIP-Client-Mac-1.3.pkg.zip",
    "remarks":" "
  },
  {
    "type":"Extension",
    "name":"Adblock Plus",
    "purpose":"Extension to block ads",
    "licenseType":"Free",
    "link":"https:\/\/chrome.google.com\/webstore\/detail\/adblock-plus-free-ad-bloc\/cfhdojbkjhnklbpkdaibdccddilifddb",
    "remarks":" "
  },
  {
    "type":"Network",
    "name":"AlienVault",
    "purpose":"Central log server",
    "licenseType":"Licensed",
    "link":"https:\/\/cybersecurity.att.com\/",
    "remarks":" "
  },
  {
    "type":"Project Management",
    "name":"Merlin Project",
    "purpose":"Project Management Tool",
    "licenseType":"Licensed",
    "link":"https:\/\/www.projectwizards.net\/en",
    "remarks":" "
  },
  {
    "type":"Database ",
    "name":"Rally",
    "purpose":"to benchmark Elasticsearch",
    "licenseType":"Free",
    "link":"https:\/\/esrally.readthedocs.io\/en\/stable\/",
    "remarks":"#423838"
  },
  {
    "type":"Productivity",
    "name":"JProfiler",
    "purpose":"Java application profiling tool",
    "licenseType":"Free",
    "link":"https:\/\/www.ej-technologies.com\/download\/jprofiler\/files",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Profile Creator",
    "purpose":"build configuration profiles using GUI",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/ProfileCreator\/ProfileCreator",
    "remarks":"#474368"
  },
  {
    "type":"Utility Software",
    "name":"Apple configurator 2",
    "purpose":"build configuration profiles using GUI",
    "licenseType":"Free",
    "link":"https:\/\/apps.apple.com\/us\/app\/apple-configurator-2\/id1037126344?mt=12",
    "remarks":" "
  },
  {
    "type":"Medicare",
    "name":"Medicare Severity Grouper\/Medicare Code Editor (MSGMCE)",
    "purpose":"compare the DRG-classification by SE-feature",
    "licenseType":"Free",
    "link":"https:\/\/www.cms.gov\/files\/zip\/ms-drg-grouper-mce-v38-0-r1-icd-10-pc-software.zip",
    "remarks":" "
  },
  {
    "type":"Medicare",
    "name":"ESRD PC Pricer",
    "purpose":"Allows to predict reimbursement to a renal dialysis facility",
    "licenseType":"Free",
    "link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer\/ESRD_Pricer",
    "remarks":" "
  },
  {
    "type":"Medicare",
    "name":"Home Health Prospective Payment System (HH PPS) PC Pricer",
    "purpose":"Medicare pricer",
    "licenseType":"Free",
    "link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "remarks":" "
  },
  {
    "type":"Medicare",
    "name":"Hospice PPS PC Pricer",
    "purpose":"Medicare pricer",
    "licenseType":"Free",
    "link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "remarks":" "
  },
  {
    "type":"Medicare",
    "name":"Inpatient PPS PC Pricer",
    "purpose":"Medicare pricer",
    "licenseType":"Free",
    "link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "remarks":" "
  },
  {
    "type":"Medicare",
    "name":"Inpatient Psychiatric Facility Prospective Payment System (IPF PPS) PC Pricer",
    "purpose":"Medicare pricer",
    "licenseType":"Free",
    "link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "remarks":" "
  },
  {
    "type":"Medicare",
    "name":"Inpatient Rehabilitation Facility PPS PC Pricer",
    "purpose":"Medicare pricer",
    "licenseType":"Free",
    "link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "remarks":" "
  },
  {
    "type":"Medicare",
    "name":"Long-Term Care Hospital PPS PC Pricer",
    "purpose":"Medicare pricer",
    "licenseType":"Free",
    "link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "remarks":" "
  },
  {
    "type":"Medicare",
    "name":"Skilled Nursing Facilities (SNF PPS) PC Pricer",
    "purpose":"Medicare pricer",
    "licenseType":"Free",
    "link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"FortiClient",
    "purpose":"Secure connection",
    "licenseType":"Free",
    "link":"https:\/\/filestore.fortinet.com\/forticlient\/downloads\/FortiClientVPNOnlineInstaller_6.4.dmg",
    "remarks":" "
  },
  {
    "type":"Testing Tool",
    "name":"Stress stimulus",
    "purpose":"A load, stress and performance testing tool for websites, web applications, web API and mobile apps of any complexity",
    "licenseType":"Free",
    "link":"https:\/\/www.stresstimulus.com\/download",
    "remarks":"#529691"
  },
  {
    "type":"VPN",
    "name":"Perimeter 81",
    "purpose":"VPN client",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"KACE",
    "purpose":"Unified endpoint management",
    "licenseType":"Licensed",
    "link":"https:\/\/kace1.gha-lan.net\/userui",
    "remarks":"#564338"
  },
  {
    "type":"Productivity",
    "name":"Microsoft CRM",
    "purpose":"Project Field is built on top of Microsoft CRM. CRM stands for customer relationship management. We cannot run Project Field without Microsoft CRM.",
    "licenseType":"Licensed",
    "link":"https:\/\/s3.console.aws.amazon.com\/s3\/buckets\/dw-field?region=us-east-1&prefix=CGT+Software+Installs\/CRM2016\/&showversions=false",
    "remarks":"Setup file was provided by CG"
  },
  {
    "type":"Productivity",
    "name":"Microsoft BizTalk",
    "purpose":"Project Field needs Microsoft BizTalk in its workflow process. Without Microsoft, the workflow of Project Field will be incomplete. Microsoft BizTalk Server allows connecting diverse software, then graphically creating and modifying process logic that uses that software.\u00a0",
    "licenseType":"Licensed",
    "link":"https:\/\/s3.console.aws.amazon.com\/s3\/buckets\/dw-field?region=us-east-1&prefix=CGT+Software+Installs\/&showversions=false",
    "remarks":"Setup file was provided by CG"
  },
  {
    "type":"Productivity",
    "name":"Mongo DB Compass",
    "purpose":"It is a GUI for connecting to the MongoDB. The MongoDB Compass allows you to make smarter decisions about document structure, querying, indexing, document validation, and more.\u00a0",
    "licenseType":"Free",
    "link":"https:\/\/www.mongodb.com\/try\/download\/compass",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"Microsoft SQL Server 2016 Developer Edition",
    "purpose":"This is a free version of Microsoft SQL Server for Development and QA environment",
    "licenseType":"Free",
    "link":"https:\/\/s3.console.aws.amazon.com\/s3\/buckets\/dw-field?region=us-east-1&prefix=CGT+Software+Installs\/SQL+Intall+Files\/&showversions=false",
    "remarks":"Setup file was provided by CG"
  },
  {
    "type":"Development tool",
    "name":"Silverlight",
    "purpose":"Silverlight is a powerful development tool for creating engaging, interactive user experiences for Web and mobile applications. Silverlight is a free plug-in, powered by the .NET framework and compatible with multiple browsers, devices and operating systems, bringing a new level of interactivity wherever the Web works. Project Field will use Internet Explorer so this is a must.",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/Silverlight\/",
    "remarks":" "
  },
  {
    "type":"EDI toolkit",
    "name":"Framework EDI",
    "purpose":"EDI parser and constructor",
    "licenseType":"Licensed",
    "link":"https:\/\/www.edidev.com\/",
    "remarks":" "
  },
  {
    "type":"Reporting Tool",
    "name":"Crystal Report 13",
    "purpose":"Used in Project Valley",
    "licenseType":"Licensed",
    "link":"https:\/\/www.crystalreports.com\/reports\/",
    "remarks":" "
  },
  {
    "type":"Reporting Tool",
    "name":"SAP Crystal Reports",
    "purpose":"Used in Project Valley",
    "licenseType":"Licensed",
    "link":"https:\/\/www.crystalreports.com\/reports\/",
    "remarks":" "
  },
  {
    "type":"Reporting Tool",
    "name":"EDIFRedi",
    "purpose":"Used in Project Valley",
    "licenseType":"Licensed",
    "link":"One drive location",
    "remarks":" "
  },
  {
    "type":"Driver",
    "name":"ExpressConnect Drivers & Services",
    "purpose":"Dell Driver",
    "licenseType":"Free",
    "link":"https:\/\/www.dell.com\/support\/home\/us\/en\/04\/drivers\/driversdetails?driverid=1jw07",
    "remarks":" "
  },
  {
    "type":"VPN",
    "name":"GlobalProtect",
    "purpose":"To connect to office network",
    "licenseType":"Free",
    "link":"https:\/\/docs.paloaltonetworks.com\/globalprotect\/4-1\/globalprotect-app-user-guide\/globalprotect-app-for-windows\/download-and-install-the-globalprotect-app-for-windows.html",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Microsoft Document Explorer 2008",
    "purpose":"This is installed by Visual Studio 2008. It's the help viewer used with Visual Studio 2008.",
    "licenseType":"Free",
    "link":" ",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Microsoft Sync Framework Services v1.0 SP1 (x64)",
    "purpose":"Installed by Visual Studio. Microsoft Sync Framework is a comprehensive synchronization platform for enabling collaboration and offline scenarios for applications, services and devices.",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=17616",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Microsoft Team Foundation Server 2010 Object Model - ENU",
    "purpose":"Installed by Visual Studio. Used for developing applications that integrate with TFS 2010.",
    "licenseType":"Free",
    "link":"https:\/\/marketplace.visualstudio.com\/items?itemName=EdH-MSFT.TeamFoundationServer2010SP1ObjectModelInstaller",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Dotfuscator Software Services - Community Edition",
    "purpose":"Installed with Visual Studio 2019. Used to harden, protect, and prune desktop, mobile, server, and embedded applications to help secure trade secrets and other intellectual property (IP), reduce piracy and counterfeiting, and protect against tampering and unauthorized debugging.",
    "licenseType":"Free",
    "link":"https:\/\/www.preemptive.com\/products\/dotfuscator\/downloads",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"WCF RIA Services V1.0 SP2",
    "purpose":"Installed by Visual Studio. The WCF RIA Services is a framework that provides a pattern to write application logic that runs on the mid-tier and controls access to data for queries, changes and custom.",
    "licenseType":"Free",
    "link":"https:\/\/www.shouldiremoveit.com\/WCF-RIA-Services-V-SP2-11010-program.aspx",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Windows Phone 8.1 Emulators - ENU",
    "purpose":"This is installed by Visual Studio. The Windows Phone 8.1 Emulators package provides emulator images for use with Visual Studio 2013 Update 2 or later.",
    "licenseType":"Free",
    "link":" ",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Lenovo Quick Clean",
    "purpose":"Installed by Lenovo. Lenovo Quick Clean application allows healthcare professionals to lock keyboard and mouse input so the laptop keyboard can be wiped down to sanitize the device. This is provided by default in the Lenovo laptop.This package updates the Lenovo Quick Clean application to fix problems, add new functions, or expand function.",
    "licenseType":"Free",
    "link":"https:\/\/support.lenovo.com\/np\/en\/downloads\/ds540666-lenovo-quick-clean-for-windows-10-thinkpad",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"LINQ to XSD Preview Alpha 0.2",
    "purpose":"Provide .NET developers with support for typed XML programming on top of LINQ to XML.",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-pk\/download\/search.aspx?q=visual+studio&p=2&r=10&t=1185&s=Relevancy%7EDescending&first=851",
    "remarks":" "
  },
  {
    "type":"Open Source",
    "name":"setroubleshoot-plugins.noarch",
    "purpose":"This package provides a set of analysis plugins for use with setroubleshoot. Each plugin has the capacity to analyze SELinux AVC data and system data to provide user friendly reports describing how to interpret SELinux AVC denials.",
    "licenseType":"Free",
    "link":"Centos Base Repo",
    "remarks":" "
  },
  {
    "type":"Open Source",
    "name":"setroubleshoot-server.x86_64",
    "purpose":"Provides tools to help diagnose SELinux problems. When AVC messages are generated an alert can be generated that will give information about the problem and help track its resolution. Alerts can be configured to user preference. The same tools can be run on existing log files.",
    "licenseType":"Free",
    "link":"Centos Base Repo",
    "remarks":" "
  },
  {
    "type":"Open Source",
    "name":"aide.x86_64",
    "purpose":"AIDE (Advanced Intrusion Detection Environment) is a file integrity checker and intrusion detection program.",
    "licenseType":"Free",
    "link":"Centos Base Repo",
    "remarks":" "
  },
  {
    "type":"Open Source",
    "name":"telnet.x86_64",
    "purpose":"Telnet is a popular protocol for logging into remote systems over the Internet. The package provides a command line Telnet client",
    "licenseType":"Free",
    "link":"Centos Base Repo",
    "remarks":" "
  },
  {
    "type":"Propriotory",
    "name":"amazon-ssm-agent.x86_64",
    "purpose":"AWS Systems Manager Agent (SSM Agent) is Amazon software that can be installed and configured on an EC2 instance, an on-premises server, or a virtual machine (VM). SSM Agent makes it possible for Systems Manager to update, manage, and configure these resources. The agent processes requests from the Systems Manager service in the AWS Cloud, and then runs them as specified in the request. SSM Agent then sends status and execution information back to the Systems Manager service by using the Amazon Message Delivery Service (service prefix: ec2messages).",
    "licenseType":"Free",
    "link":"https:\/\/docs.aws.amazon.com\/systems-manager\/latest\/userguide\/sysman-manual-agent-install.html",
    "remarks":" "
  },
  {
    "type":"Propriotory",
    "name":"newrelic-infra.x86_64",
    "purpose":"Infrastructure Monitoring in New Relic provides deep visibility into your entire estate, in one place. Capture your hosts' health and performance along with the services, containers, and resources into your overall monitoring needs. This will provide the richest set of metrics, events, logs, and configuration changes for application troubleshooting context. With New Relic, you get observability to tame the complexity of operating your entire infrastructure.",
    "licenseType":"Licensed",
    "link":"https:\/\/docs.newrelic.com\/docs\/using-new-relic\/cross-product-functions\/install-configure\/install-new-relic\/",
    "remarks":" "
  },
  {
    "type":"Propriotory",
    "name":"cloudhealth-agent.x86_64",
    "purpose":"The CloudHealth Linux Agent allows us to collect instance-level metrics.",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/CloudHealth\/agent-install-helpers",
    "remarks":" "
  },
  {
    "type":"Propriotory",
    "name":"metricbeat.x86_64",
    "purpose":"Metricbeat comes with internal modules that collect metrics from services like Apache, Jolokia, NGINX, MongoDB, MySQL, PostgreSQL, Prometheus, and more. Installation is easy, requiring absolutely zero dependencies. Just enable the modules you want in the configuration file.",
    "licenseType":"Free",
    "link":"https:\/\/www.elastic.co\/downloads\/beats\/metricbeat",
    "remarks":" "
  },
  {
    "type":"Open Source",
    "name":"elasticsearch.x86_64",
    "purpose":"Elasticsearch is the distributed, RESTful search and analytics engine at the heart of the Elastic Stack. You can use Elasticsearch to store, search, and manage data for: Logs, Metrics, A search backend, Application monitoring, Endpoint security and more!",
    "licenseType":"Free",
    "link":"https:\/\/www.elastic.co\/downloads\/elasticsearch",
    "remarks":" "
  },
  {
    "type":"Open Source",
    "name":"mozjs17.x86_64",
    "purpose":"JavaScript interpreter and libraries",
    "licenseType":"Free",
    "link":"Centos Base Repo",
    "remarks":" "
  },
  {
    "type":"SaaS, Data analytical tool",
    "name":"Tableau",
    "purpose":"Tableau report validation for ISAAC data refresh",
    "licenseType":"Licensed",
    "link":"https:\/\/www.tableau.com\/products\/desktop\/download",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"iMazing Profile Editor",
    "purpose":"build configuration profiles using GUI",
    "licenseType":"Free",
    "link":"https:\/\/imazing.com\/profile-editor",
    "remarks":"#474368"
  },
  {
    "type":"Migration Tool",
    "name":"Prowfiz tool",
    "purpose":"AD migration",
    "licenseType":"Free",
    "link":"https:\/\/www.forensit.com\/Downloads\/Profwiz.msi",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"NUnit console",
    "purpose":"This is a text-based runner for listing and running tests from the command line.",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/nunit\/nunit-console\/releases",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"dbForge SQL Decryptor",
    "purpose":"For decrypting database objects.",
    "licenseType":"Free",
    "link":"https:\/\/www.devart.com\/dbforge\/sql\/sqldecryptor\/download.html",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Kubectl",
    "purpose":"The Kubernetes command-line tool, kubectl, allows you to run commands against Kubernetes clusters.",
    "licenseType":"Free",
    "link":"https:\/\/docs.aws.amazon.com\/eks\/latest\/userguide\/install-kubectl.html",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"eksctl",
    "purpose":"CLI tool for creating and managing clusters on EKS - Amazon's managed Kubernetes service for EC2",
    "licenseType":"Free",
    "link":"https:\/\/docs.aws.amazon.com\/eks\/latest\/userguide\/eksctl.html",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Terraform CLI",
    "purpose":"Infrastructure as code",
    "licenseType":"Free",
    "link":"https:\/\/learn.hashicorp.com\/tutorials\/terraform\/install-cli",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Helm",
    "purpose":"Package manager for Kubernetes",
    "licenseType":"Free",
    "link":"https:\/\/www.eksworkshop.com\/beginner\/060_helm\/helm_intro\/install\/index.html",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"DOxygen",
    "purpose":"Doxygen is the de facto standard tool for generating documentation from annotated C++ sources, but it also supports other popular programming languages such as C, Objective-C, C#",
    "licenseType":"Free",
    "link":"https:\/\/www.doxygen.nl\/files\/doxygen-1.9.2-setup.exe",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"GraphViZ",
    "purpose":"Graphviz is open source graph visualization software. Graph visualization is a way of representing structural information as diagrams of abstract graphs and networks.",
    "licenseType":"Free",
    "link":"https:\/\/gitlab.com\/api\/v4\/projects\/4207231\/packages\/generic\/graphviz-releases\/2.49.0\/stable_windows_10_cmake_Release_x64_graphviz-install-2.49.0-win64.exe",
    "remarks":" "
  },
  {
    "type":"Database",
    "name":"RavenDB",
    "purpose":"It is used as a database.",
    "licenseType":"Free",
    "link":"https:\/\/ravendb.net",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Make SFX",
    "purpose":"This is a free program that lets you make self-extracting archives under Windows (x86 & x64) platform.",
    "licenseType":"Free",
    "link":"Make SFX (Self-extracting archive) (revocue.cz)",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"InstallShield",
    "purpose":"InstallShield is a software tool for creating installers or software packages.",
    "licenseType":"Trial",
    "link":"https:\/\/info.revenera.com\/is-eval-installshield-professional?lead_source=Website%20Visitor&id=Revenera.com",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"MS Visual Basic",
    "purpose":"MS Access is a database management system used for creating business applications.",
    "licenseType":"Free",
    "link":"https:\/\/drive.google.com\/file\/d\/0B2XHy_G4QwVid1lTME81UzlJcjQ\/view?resourcekey=0-jMkHvjhaMfEs_4Vl6FpE_Q",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"GraaVM",
    "purpose":"a software which you may refer as JDK for java development.",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/graalvm\/graalvm-ce-builds\/releases",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Scoop",
    "purpose":"the package installer for window.",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/ScoopInstaller\/Java",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Neoload",
    "purpose":"Integrations with CI servers for Agile and DevOps, APM tools for code-level diagnostics, and functional testing tools for end-user experience metrics",
    "licenseType":"Trial",
    "link":"https:\/\/www.neotys.com\/download-neoload-performance-testing-tool",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"VNC with TLS",
    "purpose":"screen sharing software",
    "licenseType":"Free",
    "link":"https:\/\/www.realvnc.com\/en\/connect\/download\/viewer\/",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"iClaimsDataExtractor",
    "purpose":"CedarGate's internal desktop application to extract claims and charges along with the configurations for Bundle, AP\/AR and Fee schedules from the iClaims Database. ",
    "licenseType":"Licensed",
    "link":"Cedar Gate",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Report Builder",
    "purpose":"For generating reports by fetching data from Microsoft SQL Server database.",
    "licenseType":"Free",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=53613&e6b34bbe-475b-1abd-2c51-b5034bcdd6d2=True",
    "remarks":" "
  },
  {
    "type":"PowerShell Module ",
    "name":"PnP PowerShell",
    "purpose":"perform complex actions in SharePoint",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/pnp\/powershell",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":"through PowerShell script",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":"Accounting",
    "name":"Saral Billing",
    "purpose":"to issue Computerized Invoice",
    "licenseType":"Licensed",
    "link":"https:\/\/saral-billing.software.informer.com\/8.0\/",
    "remarks":" "
  },
  {
    "type":"VS Code Extension",
    "name":"TSQLLint",
    "purpose":"It is used for describing, identifying, and reporting on undesirable patterns in TSQL scripts. This extension provides this functionality within VS Code.",
    "licenseType":"Free",
    "link":"https:\/\/marketplace.visualstudio.com\/items?itemName=tsqllint.tsqllint&ssr=false#overview",
    "remarks":" "
  },
  {
    "type":"Utility Dll",
    "name":"Cryptosys Api",
    "purpose":"This is used in CapCheck and Eligilibity manager for encryption",
    "licenseType":"Licensed",
    "link":"https:\/\/www.cryptosys.net\/api.html",
    "remarks":" "
  },
  {
    "type":"Business Intelligence tool",
    "name":"Power BI Desktop",
    "purpose":"create interactive dashboards and reports",
    "licenseType":"Licensed",
    "link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=58494",
    "remarks":" "
  },
  {
    "type":"Utility software",
    "name":"Pingplotter",
    "purpose":"Network Troubleshooting Tool",
    "licenseType":"Free",
    "link":"https:\/\/www.pingplotter.com\/download\/",
    "remarks":" "
  },
  {
    "type":"Open Source",
    "name":"Linqpad",
    "purpose":"LINQPad is a software utility targeted at .NET Framework and .NET Core development",
    "licenseType":"Free",
    "link":"https:\/\/www.linqpad.net\/Download.aspx",
    "remarks":" "
  },
  {
    "type":"Utility software",
    "name":"SQL Prompt",
    "purpose":"It develops tools for developers and data professionals and maintains community websites such as SQL Server Central and Simple Talk",
    "licenseType":"Licensed",
    "link":"https:\/\/www.red-gate.com\/products\/sql-prompt\/trial\/",
    "remarks":" "
  },
  {
    "type":"Utility software",
    "name":"KubeClarity",
    "purpose":"KubeClarity is a tool for detection and management of Software Bill Of Materials (SBOM) and vulnerabilities of container images and filesystems. It scans both runtime K8s clusters and CI\/CD pipelines for enhanced software supply chain security.",
    "licenseType":"Free",
    "link":"https:\/\/github.com\/openclarity\/kubeclarity",
    "remarks":" "
  },
  {
    "type":"Windows Software",
    "name":"HelpNDoc",
    "purpose":"HelpNDoc is a Windows-based help authoring tool published by French company IBE Software.",
    "licenseType":"Free",
    "link":"https:\/\/www.helpndoc.com\/download\/",
    "remarks":" "
  },
  {
    "type":"Windows Software",
    "name":"Advance Installer",
    "purpose":"Advanced Installer is a Windows installer authoring tool for installing, updating, and configuring your products safely, securely, and reliably.",
    "licenseType":"Licensed",
    "link":"https:\/\/www.advancedinstaller.com\/download.html",
    "remarks":" "
  },
  {
    "type":"Utility",
    "name":"Aver Webcam Driver\u00a0",
    "purpose":"Connect Aver camera to endpoint",
    "licenseType":"free",
    "link":"https:\/\/www.aver.com\/download-center",
    "remarks":" "
  },
  {
    "type":"Data",
    "name":"AlertyX",
    "purpose":"Alteryx Analytics Automation Platform delivers end-to-end automation of analytics, machine learning, and data science processes",
    "licenseType":"Licensed",
    "link":"https:\/\/www.alteryx.com\/designer-trial\/free-trial-alteryx",
    "remarks":" "
  },
  {
    "type":"MS 365 addon",
    "name":"PerfectIt",
    "purpose":"PerfectIt is the leading add-in among professional editors, with thousands of editors around the world using it. PerfectIt locates errors that no spelling or grammar checker can find",
    "licenseType":"Licensed",
    "link":"https:\/\/appsource.microsoft.com\/en-us\/product\/office\/wa104380773?tab=overview&exp=ubp8",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"DocumentConverter ",
    "purpose":"Bulk convert your documents in seconds on Windows",
    "licenseType":"Free",
    "link":"https:\/\/documentconverter.pro\/",
    "remarks":" "
  },
  {
    "type":"Monitoring",
    "name":"OpenMPI",
    "purpose":"Used by Horovod to distribute the training process",
    "licenseType":"Free",
    "link":"https:\/\/www.open-mpi.org\/",
    "remarks":" "
  },
  {
    "type":"Utility",
    "name":"NVDA Reader",
    "purpose":"access to technology for blind and vision impaired people.",
    "licenseType":"Free",
    "link":"https:\/\/www.nvaccess.org\/download\/",
    "remarks":" "
  },
  {
    "type":"Utility",
    "name":"Go Lang",
    "purpose":" ",
    "licenseType":"Free",
    "link":"https:\/\/go.dev\/dl\/go1.21.0.windows-amd64.msi",
    "remarks":" "
  },
  {
    "type":"Business Intelligence tool",
    "name":"Power BI Connector for Jira",
    "purpose":"Connect Jira to Power BI and build custom Jira reports easily",
    "licenseType":"Licensed",
    "link":"https:\/\/marketplace.atlassian.com\/apps\/1221150\/power-bi-connector-for-jira?tab=overview&hosting=cloud&utm_source=google&utm_medium=cpc&utm_campaign=sn_pbi_jira_other&utm_vendorID=1216274&utm_term=jira%20power%20bi%20connector&hsa_acc=5924481196&hsa_cam=17867500517&hsa_grp=139060449283&hsa_ad=628724164541&hsa_src=g&hsa_tgt=kwd-859082026971&hsa_kw=jira%20power%20bi%20connector&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad=1&gclid=Cj0KCQiAuqKqBhDxARIsAFZELmIROsuW9is52SwmiaPDVwc45hLfMWfW3DXSzW7lRvKxOVW9rQZuZyAaAljhEALw_wcB",
    "remarks":" "
  },
  {
    "type":"Basic Mac Software",
    "name":"Mongo Cli",
    "purpose":"Store data in flexible documents and develop applications designed to adapt and scale, backed by Atlas, a fully managed platform with always-on security and an ecosystem of tools and integrations.",
    "licenseType":"Free",
    "link":"https:\/\/www.mongodb.com\/docs\/v4.4\/mongo\/",
    "remarks":" "
  },
  {
    "type":"Utility Software",
    "name":"Johns Hopkins ACG 13.0.1",
    "purpose":"The ACG\u00ae System has been used in commercial and research settings worldwide, longer and more extensively than any other system on the market today. The software component is tried and true, continuously undergoing improvements and modifications in response to user needs.",
    "licenseType":"Licensed",
    "link":"https:\/\/www.hopkinsacg.org\/document\/download-v13\/",
    "remarks":" "
  },
  {
    "type":"Productivity",
    "name":"DAX Studio",
    "purpose":"DAX Studio is a free, open-source tool that helps in the authoring of DAX queries in Power BI and Power BI Report Builder and helps in DAX query profiling and performance analysis.It is governed by the Microsoft Reciprocal License (License | DAX Studio). The tool was created by Darren Gosbell (https:\/\/darren.gosbell.com\/about\/) and later donated to the public domain. The open source code is available at https:\/\/github.com\/daxstudio\/daxstudio.",
    "licenseType":"Free",
    "link":"https:\/\/daxstudio.org\/downloads\/",
    "remarks":" "
  },
  {
    "type":"Utility",
    "name":"Colour Contrast Analyzer",
    "purpose":"As a part of Analytics EA accessibility audit and changes, we are required to test the color contrast accessibility changes using tool 'Colour Contrast Analyzer'",
    "licenseType":"Free",
    "link":"https:\/\/www.tpgi.com\/color-contrast-checker",
    "remarks":" "
  },
  {
    "type":"VPN",
    "name":"SonicWall NetExtender VPN",
    "purpose":"SonicWall VPN Clients provide your employees safe, easy access to the data they need from any device",
    "licenseType":"Free",
    "link":"https:\/\/www.sonicwall.com\/products\/remote-access\/vpn-clients\/",
    "remarks":" "
  },
  {
    "type":"Development Tool",
    "name":"Goland IDE",
    "purpose":"GoLand is a powerful platform with many features designed specifically for Go developers.",
    "licenseType":"Free",
    "link":"https:\/\/www.jetbrains.com\/go\/",
    "remarks":" "
  },
  {
    "type":"Remote Connection",
    "name":"SecureLink Connection Manager",
    "purpose":"The SecureLink Connection Manager is a software tool designed to facilitate secure remote access to client systems and networks. ",
    "licenseType":"Free",
    "link":"https:\/\/SecureLink.Trinity-Health.org",
    "remarks":" "
  },
  {
    "type":"Utility",
    "name":"irfanview",
    "purpose":"image viewer, editor, organiser and converter program for Microsoft Windows",
    "licenseType":"Free",
    "link":"https:\/\/www.irfanview.com\/",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  },
  {
    "type":" ",
    "name":" ",
    "purpose":" ",
    "licenseType":" ",
    "link":" ",
    "remarks":" "
  }

  // Add more items as needed
];
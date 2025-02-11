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
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "cvs.x86_64",
    "purpose": "Concurrent Versions System",
    "licenseType": "Free",
    "link": "http://cvs.nongnu.org/",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "freeradius.x86_64",
    "purpose": "High-performance and highly configurable free RADIUS server",
    "licenseType": "Free",
    "link": "https://freeradius.org/",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "freerdp.x86_64",
    "purpose": "Remote Desktop Protocol client",
    "licenseType": "Free",
    "link": "http://www.freerdp.com/",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "graphviz.x86_64",
    "purpose": "Graph Visualization Tools",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/graphviz-2.30.1-21.el7.x86_64.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "httpd.x86_64",
    "purpose": "Apache HTTP Server",
    "licenseType": "Free",
    "link": "https://httpd.apache.org/docs/2.4/platform/rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "madan-fonts.noarch",
    "purpose": "Font for Nepali language",
    "licenseType": "Free",
    "link": "https://pkgs.org/download/madan-fonts",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "mlocate.x86_64",
    "purpose": "An utility for finding files by name",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/mlocate-0.26-8.el7.x86_64.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "mtr.x86_64",
    "purpose": "A network diagnostic tool",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/mtr-0.85-7.el7.x86_64.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "MySQL-python.x86_64",
    "purpose": "An interface to MySQL",
    "licenseType": "Free",
    "link": "http://rpmfind.net/linux/RPM/MySQL-python.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "mythes-en.noarch",
    "purpose": "English thesaurus",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/6/centos-x86_64/mythes-en-3.0-6.el6.noarch.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "net-snmp.x86_64",
    "purpose": "A collection of SNMP protocol tools and libraries",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/net-snmp-5.7.2-37.el7.x86_64.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "rrdtool.x86_64",
    "purpose": "Round Robin Database Tool to store and display time-series data",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/rrdtool-1.4.8-9.el7.x86_64.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "rsyslog.x86_64",
    "purpose": "Enhanced system logging and kernel message trapping daemon",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/rsyslog-8.24.0-34.el7.x86_64.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "samba-common.noarch",
    "purpose": "Files used by both Samba servers and clients",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/samba-common-4.8.3-4.el7.noarch.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "subversion.x86_64",
    "purpose": "A Modern Concurrent Version Control System",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/centos-x86_64/subversion-1.7.14-14.el7.x86_64.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "dpkg.x86_64",
    "purpose": "Package maintenance system for Debian Linux",
    "licenseType": "Free",
    "link": "https://pkgs.org/download/dpkg",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "fping.x86_64",
    "purpose": "Scriptable, parallelized ping-like utility",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/repoforge-x86_64/fping-3.10-1.el7.rf.x86_64.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "htop.x86_64",
    "purpose": "Interactive process viewer",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/epel-x86_64/htop-2.2.0-3.el7.x86_64.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "jwhois.x86_64",
    "purpose": "Internet whois/nicname client",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/epel-x86_64/jwhois-4.0-45.el7.x86_64.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "mailgraph.noarch",
    "purpose": "A RRDtool frontend for Mail statistics",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/epel-x86_64/mailgraph-1.14-31.el7.noarch.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "mcrypt.x86_64",
    "purpose": "Replacement for crypt()",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/epel-x86_64/mcrypt-2.6.8-11.el7.x86_64.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic CentOS software",
    "name": "smokeping.noarch",
    "purpose": "Latency Logging and Graphing System",
    "licenseType": "Free",
    "link": "https://centos.pkgs.org/7/ghettoforge-x86_64/smokeping-2.6.11-1.gf.el7.noarch.rpm.html",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "SpeechSynthesisServer",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "TV",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Videos",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Music",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "DVD Player",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Siri",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Find My",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "QuickTime Player",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Chess",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Photo Booth",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Notes",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Image Capture",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "iBooks",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Preview",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Podcasts",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Dashboard",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "TextEdit",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Mail",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Safari",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Dictionary",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Contacts",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Time Machine",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Font Book",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "NativeMessagingHost",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "FaceTime",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "TextInputSwitcher",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Maps",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Mission Control",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Stickies",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Photos",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Messages",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Calculator",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "iTunes",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Launchpad",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Reminders",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "App Store",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Automator",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Calendar",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "System Preferences",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "db",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Gatekeeper Configuration Data",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "MRTConfigData",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.GarageBand_AppStore.bom",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.GarageBand_AppStore.plist",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.Keynote7.bom",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.Keynote7.plist",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.Numbers4.bom",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.Numbers4.plist",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.Pages6.bom",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.Pages6.plist",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.iMovie_AppStore.bom",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "com.apple.pkg.iMovie_AppStore.plist",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "ABAssistantService",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "About This Mac",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "AccessibilityVisualsAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "AinuIM",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "AirDrop",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "AirPlayUIAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "AirScanLegacyDiscovery",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "AirScanScanner",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "All My Files",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "AOSHeartbeat",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "AOSPushRelay",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "AskPermissionUI",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Assistive Control",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "AutoPartition",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "AVB Audio Configuration",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Calibration Assistant",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Canon IJScanner4",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Canon IJScanner6",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "CMFSyncAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "commandFilter",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Computer",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "ControlStrip",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "DFRHUD",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Dictation",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Digital Color Meter",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "DiscHelper",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Dwell Control",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "EmojiFunctionRowIM",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "EPFaxAutoSetupTool",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "EscrowSecurityAlert",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "ESET Endpoint Security",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Family",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Fax Receive Monitor",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "FAX Utility",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "FolderActionsDispatcher",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "FollowUpUI",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Games",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "GarageBand",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "HindiIM",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "iCloud",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "iCloud Drive",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "iCloudUserNotificationsd",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "identityservicesd",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "IDSRemoteURLConnectionAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "IMAutomaticHistoryDeletionAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "imavagent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "iMovie",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "IMTransferAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Install Command Line Developer Tools",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Install in Progress",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Install macOS Mojave",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Installer Progress",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "JapaneseIM",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Keychain Circle Notification",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Keynote",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "LaterAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "MRT",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "nbagent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Network",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Notification Center",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Notify",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "NowPlayingTouchUI",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "NowPlayingWidgetContainer",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Numbers",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "OSDUIHelper",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Pages",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Pass Viewer",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Photo Library Migration Utility",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "PIPAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "PowerChime",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Quick Look Simulator",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "rastertoepfax",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Recents",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "ReportPanic",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "ScriptMonitor",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "soagent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "SocialPushAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Speech Downloader",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "SpeechService.service",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Spotlight.service",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "SSMenuAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Stocks",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Storage Management",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "storeuid",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Summary Service",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "System Image Utility",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "ThermalTrap",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "universalAccessAuthWarn",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "UniversalAccessControl",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "UniversalAccessHUD",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Weather",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Widget Simulator",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "wxrc-3",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "WiFiAgent",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Wireless Diagnostics",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "CheatSheet",
    "purpose": "Mac keyboard shortcut",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Wunderlist",
    "purpose": "To-do list software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Skitch",
    "purpose": "Screen shot",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "UIKitSystem",
    "purpose": "Construct and manage a graphical, event-driven user interface",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Home",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Basic Mac Software",
    "name": "Books",
    "purpose": "Basic Mac Software",
    "licenseType": "Free",
    "link": "https://support.apple.com",
    "remarks": NaN
  },
  {
    "type": "Accounting",
    "name": "Tally",
    "purpose": "ERP system for accounting,inventory and data integrity.",
    "licenseType": "Licensed",
    "link": "https://tallysolutions.com/ ",
    "remarks": NaN
  },
  {
    "type": "Accounting",
    "name": "Deerwalk Salary Sheet",
    "purpose": "Deerwalk's product for monthly salary sheet's auto email ",
    "licenseType": "Licensed",
    "link": "Deerwalk",
    "remarks": NaN
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
    "remarks": NaN
  },
  {
    "type": "Anti Virus",
    "name": "lsb-esets.x86_64",
    "purpose": "Antivirus and internet security solutions for CentOS",
    "licenseType": "Licensed",
    "link": "https://www.eset.com",
    "remarks": NaN
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
    "remarks": NaN
  },
  {
    "type": "API ",
    "name": "xsltproc",
    "purpose": "Command line tool for applying XSLT stylesheets to XML documents",
    "licenseType": "Free",
    "link": "http://www.sagehill.net/docbookxsl/InstallingAProcessor.html",
    "remarks": NaN
  },
  {
    "type": "API ",
    "name": "Docker",
    "purpose": "Deployment Tool",
    "licenseType": "Free",
    "link": "https://docs.docker.com/docker-for-mac/install/",
    "remarks": NaN
  },
  {
    "type": "API ",
    "name": "Xcode",
    "purpose": "Developer Tool",
    "licenseType": "Free",
    "link": "https://xcode-mac.en.softonic.com/mac",
    "remarks": NaN
  },
  {
    "type": "API ",
    "name": "VirtualBox",
    "purpose": "Component of Docker",
    "licenseType": "Free",
    "link": "https://docs.docker.com/docker-for-mac/install/",
    "remarks": NaN
  },
  {
    "type": "API ",
    "name": "Application Loader",
    "purpose": "Component of Xcode",
    "licenseType": "Free",
    "link": "https://xcode-mac.en.softonic.com/mac",
    "remarks": NaN
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
    "remarks": NaN
  },
  {
    "type": "API ",
    "name": "Insomnia",
    "purpose": "Rest client required for development. Alternative to PostMan.",
    "licenseType": "Free",
    "link": "https://insomnia.rest/",
    "remarks": NaN
  },
  {
    "type": "API ",
    "name": "FileMerge",
    "purpose": "Component of Xcode",
    "licenseType": "Free",
    "link": "https://apple.stackexchange.com/questions/42345/where-can-i-download-filemerge-the-app-for-comparing-two-tools-and-merging-the",
    "remarks": NaN
  },
  {
    "type": "AWS Related",
    "name": "AWS Schema Conversion Tool",
    "purpose": "Needed for aurora conversion",
    "licenseType": "Free",
    "link": "https://aws.amazon.com/documentation/SchemaConversionTool/",
    "remarks": NaN
  },
  {
    "type": "AWS Related",
    "name": "Amazon Redshift ODBC Driver 64-bit",
    "purpose": "Needed for redshift connection",
    "licenseType": "Free",
    "link": "https://docs.aws.amazon.com/redshift/latest/mgmt/configuring-connections.html",
    "remarks": NaN
  },
  {
    "type": "AWS Related",
    "name": "AWS Command Line Interface",
    "purpose": "AWS related scripting and execution",
    "licenseType": "Free",
    "link": "https://aws.amazon.com/cli/",
    "remarks": NaN
  },
  {
    "type": "AWS Related",
    "name": "awscli ",
    "purpose": "Universal Command Line Environment for AWS",
    "licenseType": "Free",
    "link": "https://aws.amazon.com/cli/",
    "remarks": NaN
  },
  {
    "type": "AWS Related",
    "name": "Syslog client",
    "purpose": "For AWS config project, to connect to DB",
    "licenseType": "Free",
    "link": "https://syslog-ng.com/blog/installing-syslog-ng-aws-linux-ami/",
    "remarks": NaN
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Activity Monitor",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Terminal",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Software Update",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AddPrinter",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Certificate Assistant",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Dock",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"KeyboardSetupAssistant",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"ARDAgent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Setup Assistant",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"loginwindow",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"CharacterPalette",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"InkServer",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"KoreanIM",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"ColorSync Utility",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"System Information",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"VoiceOver Utility",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Directory Utility",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Finder",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Installer",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Archive Utility",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"HelpViewer",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Screen Sharing",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"RAID Utility",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Folder Actions Setup",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Voice Memos",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Screenshot",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Migration Assistant",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Keychain Access",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Grapher",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Disk Utility",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Console",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Boot Camp Assistant",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Audio MIDI Setup",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AirPort Utility",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"News",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Show Info",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Set Info",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Rename",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Remove",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Proof",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Match",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Extract",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Cocoa-AppleScript Applet",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Canon IJScanner2",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"ChineseTextConverterService",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"syncuid",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Conflict Resolver",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"SpeechRecognitionServer",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"SoftwareUpdateNotificationManager",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"VoiceOver Quickstart",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"ScreenReaderUIServer",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"PubSubAgent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AppleMobileSync",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AppleMobileSync",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"ParentalControls",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"DiskImages UI Agent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"CIMFindInputCodeTool",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AOSAlertManager",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"VietnameseIM",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"TrackpadIM",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"TamilIM",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"TCIM",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"SCIM",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"PressAndHold",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"PluginIM",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"KeyboardViewer",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"50onPaletteServer",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AutoImporter",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"VirtualScanner",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Type4Camera",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"PTPCamera",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"MassStorageCamera",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"MakePDF",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Build Web Page",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"WebKitPluginHost",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Wish",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"SyncServer",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"quicklookd32",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"quicklookd",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"QuickLookUIHelper",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"PrinterProxy",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"SpeechSynthesisServer",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"FontRegistryUIAgent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AddressBookManager",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"check_afp",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"rcd",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"VoiceOver",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"UserNotificationCenter",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"UnmountAssistantAgent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Ticket Viewer",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"System Events",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Spotlight",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Script Menu",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"ScreenSaverEngine",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"RegisterPluginIMApp",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Problem Reporter",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"ODSAgent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"OBEXAgent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"NetAuthAgent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Memory Slot Utility",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"LocationMenu",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Language Chooser",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Jar Launcher",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Expansion Slot Utility",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"DiskImageMounter",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Database Events",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"CoreServicesUIAgent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"CoreLocationAgent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"BluetoothUIServer",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Bluetooth Setup Assistant",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AppleScript Utility",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AppleGraphicsWarning",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AirPort Base Station Agent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AddressBookUrlForwarder",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Display Calibrator",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"imagent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Image Events",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"QtWebEngineProcess",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Grab",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Type8Camera",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Type5Camera",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"asannotation2",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"convertpdf",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"atmsupload",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Instruments",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Uninstall",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"monitor",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Install",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"CCLibrary",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"LIBS_3",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Setup",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"hpdot4d",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Crash Reporter",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AppleFileServer",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Bluetooth File Exchange",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AddressBookSourceSync",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"AddressBookSync",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"CalendarFileHandler",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Captive Network Assistant",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Embed",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Feedback Assistant",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"ManagedClient",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"OneDrive",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Photos Agent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"RapportUIAgent",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"screencapturetb",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"screencaptureui",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Script Editor",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"STMUIHelper",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"UASharedPasteboardProgressUI",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"eaptlstrust",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"SystemUIServer",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Paired Devices",
    "Purpose":"Basic Mac Software",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"GoogleVoiceAndVideoUninstaller",
    "Purpose":"Google Voice Plugin For Mac",
    "License Type ":"Free",
    "Link":"https:\/\/tools.google.com\/dlpage\/hangoutplugin",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"activity-log-manager",
    "Purpose":"blacklist configuration user interface for Zeitgeist",
    "License Type ":"Free",
    "Link":"https:\/\/launchpad.net\/activity-log-manager",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"apport-gtk",
    "Purpose":"GTK+ frontend for the apport crash report system",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.ubuntu.com\/Apport",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"apturl",
    "Purpose":"install packages using the apt protocol - GTK+ frontend",
    "License Type ":"Free",
    "Link":"https:\/\/pkgs.org\/download\/apturl",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"brasero",
    "Purpose":"CD\/DVD burning application for GNOME",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Brasero",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"checkbox-converged",
    "Purpose":"testing tool for all Ubuntu devices",
    "License Type ":"Free",
    "Link":"https:\/\/pkgs.org\/download\/checkbox-converged",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"cheese",
    "Purpose":"tool to take pictures and videos from your webcam",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Cheese",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"cinnamon",
    "Purpose":"Innovative and comfortable desktop",
    "License Type ":"Free",
    "Link":"http:\/\/cinnamon.linuxmint.com",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"cinnamon-control-center",
    "Purpose":"utilities to configure the Cinnamon desktop",
    "License Type ":"Free",
    "Link":"http:\/\/cinnamon.linuxmint.com\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"cinnamon-screensaver",
    "Purpose":"Cinnamon screen saver and locker",
    "License Type ":"Free",
    "Link":"http:\/\/cinnamon.linuxmint.com\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"cinnamon-settings-daemon",
    "Purpose":"daemon handling the Cinnamon session settings",
    "License Type ":"Free",
    "Link":"http:\/\/cinnamon.linuxmint.com",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"compiz",
    "Purpose":"OpenGL window and compositing manager",
    "License Type ":"Free",
    "Link":"https:\/\/launchpad.net\/compiz",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"deja-dup",
    "Purpose":"Back up your files",
    "License Type ":"Free",
    "Link":"https:\/\/launchpad.net\/deja-dup",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"emacs24",
    "Purpose":"GNU Emacs editor (with GTK+ user interface)",
    "License Type ":"Free",
    "Link":"https:\/\/www.gnu.org\/software\/emacs\/download.html",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"empathy",
    "Purpose":"GNOME multi-protocol chat and call client",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Empathy",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"eog",
    "Purpose":"Eye of GNOME graphics viewer program",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/EyeOfGnome",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"evince",
    "Purpose":"Document (PostScript, PDF) viewer",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Evince",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"file-roller",
    "Purpose":"archive manager for GNOME",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/FileRoller",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"firefox",
    "Purpose":"Safe and easy web browser from Mozilla",
    "License Type ":"Free",
    "Link":"https:\/\/www.mozilla.org\/en-US\/firefox\/new\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gedit",
    "Purpose":"official text editor of the GNOME desktop environment",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Gedit",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gimp",
    "Purpose":"The GNU Image Manipulation Program",
    "License Type ":"Free",
    "Link":"http:\/\/www.gimp.org\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gksu",
    "Purpose":"graphical front-end to su and sudo",
    "License Type ":"Free",
    "Link":"http:\/\/www.nongnu.org\/gksu",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gnome",
    "Purpose":"GNOME desktop",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gnome-calculator",
    "Purpose":"GNOME desktop calculator",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Calculator",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gnome-control-center",
    "Purpose":"utilities to configure the GNOME desktop",
    "License Type ":"Free",
    "Link":"https:\/\/packages.ubuntu.com\/gnome-control-center",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gnome-mahjongg",
    "Purpose":"classic Eastern tile game for GNOME",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Mahjongg",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gnome-mines",
    "Purpose":"popular minesweeper puzzle game for GNOME",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Mines",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gnome-shell",
    "Purpose":"graphical shell for the GNOME desktop",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Projects\/GnomeShell",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gnome-sudoku",
    "Purpose":"Sudoku puzzle game for GNOME",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Sudoku",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gnome-system-log",
    "Purpose":"system log viewer for GNOME",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Attic\/GnomeUtils",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gnome-system-monitor",
    "Purpose":"Process viewer and system resource monitor for GNOME",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/SystemMonitor",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gnome-terminal",
    "Purpose":"GNOME terminal emulator application",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Terminal",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gnome-initial-setup",
    "Purpose":"helps easily configure your language, keyboard layout",
    "License Type ":"Free",
    "Link":"https:\/\/launchpad.net\/ubuntu\/bionic\/+package\/gnome-initial-setup",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gnome-tweak-tool",
    "Purpose":"Graphical interface for advanced GNOME 3 settings.",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/action\/show\/Apps\/Tweaks?action=show&redirect=Apps%2FGnomeTweakTool",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gnomine",
    "Purpose":"popular minesweeper puzzle game for GNOME (transitional package)",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Terminal",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gdebi",
    "Purpose":"simple tool to view and install deb files - GNOME GUI",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Terminal",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gparted",
    "Purpose":"GNOME partition editor",
    "License Type ":"Free",
    "Link":"http:\/\/gparted.sourceforge.net",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"gucharmap",
    "Purpose":"Unicode character picker and font browser",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Gucharmap",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"guidus",
    "Purpose":"guidus - GUI for dus, tool to create boot drives",
    "License Type ":"Free",
    "Link":"https:\/\/help.ubuntu.com\/community\/mkusb",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"hplip",
    "Purpose":"HP Linux Printing and Imaging System (HPLIP)",
    "License Type ":"Free",
    "Link":"http:\/\/hplipopensource.com\/hplip-web\/index.html",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"im-config",
    "Purpose":"Input method configuration framework",
    "License Type ":"Free",
    "Link":"https:\/\/packages.ubuntu.com\/xenial\/im-config",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"indicator-multiload",
    "Purpose":"Graphical system load indicator for CPU",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.ubuntu.com\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"libreoffice-base",
    "Purpose":"office productivity suite -- database",
    "License Type ":"Free",
    "Link":"http:\/\/www.libreoffice.org",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"libreoffice-calc",
    "Purpose":"office productivity suite -- spreadsheet",
    "License Type ":"Free",
    "Link":"http:\/\/www.libreoffice.org",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"libreoffice-draw",
    "Purpose":"office productivity suite -- drawing",
    "License Type ":"Free",
    "Link":"http:\/\/www.libreoffice.org",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"libreoffice-impress",
    "Purpose":"office productivity suite -- presentation",
    "License Type ":"Free",
    "Link":"http:\/\/www.libreoffice.org",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"libreoffice-math",
    "Purpose":"office productivity suite -- equation editor",
    "License Type ":"Free",
    "Link":"http:\/\/www.libreoffice.org",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"libreoffice-writer",
    "Purpose":"office productivity suite -- word processor",
    "License Type ":"Free",
    "Link":"http:\/\/www.libreoffice.org",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"mkusb",
    "Purpose":"mkusb - tool to create boot drives",
    "License Type ":"Free",
    "Link":"https:\/\/help.ubuntu.com\/community\/mkusb",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"mutter",
    "Purpose":"lightweight GTK+ window manager",
    "License Type ":"Free",
    "Link":"https:\/\/packages.ubuntu.com\/trusty\/x11\/mutter",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"nautilus",
    "Purpose":"file manager and graphical shell for GNOME",
    "License Type ":"Free",
    "Link":"http:\/\/www.gnome.org\/projects\/nautilus\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"notification-daemon",
    "Purpose":"daemon for displaying passive pop-up notifications",
    "License Type ":"Free",
    "Link":"https:\/\/packages.ubuntu.com\/source\/trusty\/notification-daemon",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"nemo",
    "Purpose":"File manager and graphical shell for Cinnamon",
    "License Type ":"Free",
    "Link":"http:\/\/cinnamon.linuxmint.com\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"onboard",
    "Purpose":"Simple On-screen Keyboard",
    "License Type ":"Free",
    "Link":"https:\/\/launchpad.net\/onboard",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"openssh-client",
    "Purpose":"secure shell (SSH) client",
    "License Type ":"Free",
    "Link":"https:\/\/help.ubuntu.com\/community\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"openssh-server",
    "Purpose":"secure shell (SSH) server",
    "License Type ":"Free",
    "Link":"https:\/\/help.ubuntu.com\/community\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"pacman",
    "Purpose":"Chase Monsters in a Labyrinth",
    "License Type ":"Free",
    "Link":"https:\/\/pkgs.org\/download\/pacman",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"pavucontrol",
    "Purpose":"PulseAudio Volume Control",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.ubuntu.com\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"pulseaudio-equalizer",
    "Purpose":"Equalizer sink module for PulseAudio sound server",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.ubuntu.com\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"pypar2",
    "Purpose":"graphical frontend for the par2 utility",
    "License Type ":"Free",
    "Link":"http:\/\/pypar2.silent-blade.org\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"remmina",
    "Purpose":"remote desktop client for GNOME desktop environment",
    "License Type ":"Free",
    "Link":"http:\/\/remmina.sourceforge.net\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"rhythmbox",
    "Purpose":"music player and organizer for GNOME",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Rhythmbox",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"safeeyes",
    "Purpose":"Safe Eyes",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.ubuntu.com\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"screen",
    "Purpose":"allows you to use multiple terminal sessions within one window",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.ubuntu.com\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"seahorse",
    "Purpose":"GNOME front end for GnuPG",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Seahorse",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"shotwell",
    "Purpose":"digital photo organizer",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Shotwell",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"signon-ui",
    "Purpose":"Dummy transitional package for signon-ui",
    "License Type ":"Free",
    "Link":"https:\/\/launchpad.net\/signon-ui",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"simple-scan",
    "Purpose":"Simple Scanning Utility",
    "License Type ":"Free",
    "Link":"https:\/\/launchpad.net\/simple-scan",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"skype",
    "Purpose":"client for Skype VOIP and instant messaging service",
    "License Type ":"Free",
    "Link":"http:\/\/www.skype.com",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"software-properties-gtk",
    "Purpose":"manage the repositories that you install software from (gtk)",
    "License Type ":"Free",
    "Link":"https:\/\/packages.ubuntu.com\/trusty\/gnome\/software-properties-gtk",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"system-config-printer",
    "Purpose":"graphical interface to configure the printing system        ",
    "License Type ":"Free",
    "Link":"https:\/\/pkgs.org\/download\/system-config-printer",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"time",
    "Purpose":"GNU time program for measuring CPU resource usage",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.ubuntu.com\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"thunderbird",
    "Purpose":"Email, RSS and newsgroup client with integrated spam filter",
    "License Type ":"Free",
    "Link":"https:\/\/mozilla-thunderbird.en.uptodown.com\/ubuntu",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"totem",
    "Purpose":"Simple media player for the GNOME desktop based on GStreamer",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Videos",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"unetbootin",
    "Purpose":"installer of Linux\/BSD distributions to a partition or USB drive",
    "License Type ":"Free",
    "Link":"http:\/\/unetbootin.sourceforge.net",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"unity-control-center",
    "Purpose":"utilities to configure the GNOME desktop",
    "License Type ":"Free",
    "Link":"https:\/\/pkgs.org\/download\/unity-control-center",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"unity-lens-photos",
    "Purpose":"Photos lens for Unity",
    "License Type ":"Free",
    "Link":"https:\/\/packages.ubuntu.com\/xenial\/gnome\/unity-lens-photos",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"unity-scope-gdrive",
    "Purpose":"Google Drive scope for Unity",
    "License Type ":"Free",
    "Link":"https:\/\/launchpad.net\/unity-scope-gdrive",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"update-manager",
    "Purpose":"GNOME application that manages apt updates",
    "License Type ":"Free",
    "Link":"https:\/\/packages.ubuntu.com\/trusty-updates\/update-manager",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"usb-creator-gtk",
    "Purpose":"create a startup disk using a CD or disc image (for GNOME)",
    "License Type ":"Free",
    "Link":"https:\/\/pkgs.org\/download\/usb-creator-gtk",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"variety",
    "Purpose":"Wallpaper changer",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.ubuntu.com\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"vim",
    "Purpose":"Vi IMproved - enhanced vi editor",
    "License Type ":"Free",
    "Link":"http:\/\/www.vim.org\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"vlc",
    "Purpose":"multimedia player and streamer",
    "License Type ":"Free",
    "Link":"http:\/\/www.videolan.org\/vlc\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"webbrowser-app",
    "Purpose":"Ubuntu web browser",
    "License Type ":"Free",
    "Link":"https:\/\/launchpad.net\/webbrowser-app",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"xdiagnose",
    "Purpose":"X.org diagnosis tool",
    "License Type ":"Free",
    "Link":"http:\/\/wiki.ubuntu.com\/X",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"indicator-stickynotes",
    "Purpose":"Sticky Notes Application",
    "License Type ":"Free",
    "Link":"https:\/\/launchpad.net\/indicator-stickynotes",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"xpad",
    "Purpose":"sticky note application for X",
    "License Type ":"Free",
    "Link":"http:\/\/mterry.name\/xpad\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"xsane",
    "Purpose":"featureful graphical frontend for SANE (Scanner Access Now Easy)",
    "License Type ":"Free",
    "Link":"http:\/\/www.xsane.org\/",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"yelp",
    "Purpose":"Help browser for GNOME",
    "License Type ":"Free",
    "Link":"https:\/\/wiki.gnome.org\/Apps\/Yelp",
    "Remarks":null
  },
  {
    "Type":"Basic Ubuntu Software",
    "Name":"mlocate",
    "Purpose":"An utility for finding files by name",
    "License Type ":"Free",
    "Link":"https:\/\/pkgs.org\/download\/mlocate",
    "Remarks":null
  },
  {
    "Type":"Browser",
    "Name":"firefox",
    "Purpose":"Mozilla's Web Browser in Linux",
    "License Type ":"Free",
    "Link":"https:\/\/www.ubuntu.com\/download",
    "Remarks":null
  },
  {
    "Type":"Browser",
    "Name":"Mozilla Firefox",
    "Purpose":"Mozilla's Web Browser",
    "License Type ":"Free",
    "Link":"https:\/\/www.mozilla.org\/en-US\/firefox\/new\/",
    "Remarks":null
  },
  {
    "Type":"Browser",
    "Name":"Google Chrome",
    "Purpose":"Google's Web Browser",
    "License Type ":"Free",
    "Link":"https:\/\/www.google.com\/chrome\/",
    "Remarks":null
  },
  {
    "Type":"Browser",
    "Name":"google-chrome-stable",
    "Purpose":"Google's Web Browser for Ubuntu",
    "License Type ":"Free",
    "Link":"https:\/\/www.google.com\/chrome\/",
    "Remarks":null
  },
  {
    "Type":"Browser",
    "Name":"Internet Explorer",
    "Purpose":"Microsoft's Web Browser by default",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/internet-explorer.aspx",
    "Remarks":null
  },
  {
    "Type":"Browser",
    "Name":"Microsoft Edge",
    "Purpose":"Microsoft's Web Browser by default",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/edge",
    "Remarks":null
  },
  {
    "Type":"Browser",
    "Name":"Chromium",
    "Purpose":"Browser",
    "License Type ":"Free",
    "Link":"https:\/\/www.chromium.org\/getting-involved\/download-chromium",
    "Remarks":null
  },
  {
    "Type":"Browser",
    "Name":"chrome-gnome-shell",
    "Purpose":"Browser",
    "License Type ":"Free",
    "Link":"https:\/\/www.ubuntu.com\/download",
    "Remarks":null
  },
  {
    "Type":"Browser",
    "Name":"chromium-browser",
    "Purpose":"Chromium web browser, open-source version of Chrome",
    "License Type ":"Free",
    "Link":"https:\/\/chromium.googlesource.com\/chromium\/src\/",
    "Remarks":null
  },
  {
    "Type":"Browser Service",
    "Name":"firefox-locale-en",
    "Purpose":"Basic Ubuntu Software",
    "License Type ":"Free",
    "Link":"https:\/\/www.ubuntu.com\/download",
    "Remarks":null
  },
  {
    "Type":"Browser Service",
    "Name":"Mozilla Maintenance Service",
    "Purpose":"Enables automatic allows application updates to occur in the background",
    "License Type ":"Free",
    "Link":"https:\/\/support.mozilla.org\/en-US\/kb\/what-mozilla-maintenance-service",
    "Remarks":null
  },
  {
    "Type":"Browser Service",
    "Name":"Google Docs",
    "Purpose":"Google Docs",
    "License Type ":"Free",
    "Link":"https:\/\/www.google.com\/chrome\/",
    "Remarks":null
  },
  {
    "Type":"Browser Service",
    "Name":"Google Sheets",
    "Purpose":"Google Sheets",
    "License Type ":"Free",
    "Link":"https:\/\/www.google.com\/chrome\/",
    "Remarks":null
  },
  {
    "Type":"Browser Service",
    "Name":"Google Slides",
    "Purpose":"Google Slides",
    "License Type ":"Free",
    "Link":"https:\/\/www.google.com\/chrome\/",
    "Remarks":null
  },
  {
    "Type":"Build Automation Tool",
    "Name":"Maven",
    "Purpose":"Build Dependency",
    "License Type ":"Free",
    "Link":"https:\/\/maven.apache.org\/",
    "Remarks":null
  },
  {
    "Type":"CCTV Camera Software ",
    "Name":"ocxsetup",
    "Purpose":"For CCTV streaming and storing videos",
    "License Type ":"Free",
    "Link":"Supplied by vendor",
    "Remarks":null
  },
  {
    "Type":"Cloud Service",
    "Name":"Microsoft's cross-platform database tool",
    "Purpose":"Microsoft's cloud computing platform",
    "License Type ":"Licensed",
    "Link":"https:\/\/azure.microsoft.com\/en-us\/",
    "Remarks":null
  },
  {
    "Type":"Cloud Service",
    "Name":"Azure Data Studio",
    "Purpose":"cross-platform database tool",
    "License Type ":"Free",
    "Link":"https:\/\/docs.microsoft.com\/en-us\/sql\/azure-data-studio\/download-azure-data-studio?view=sql-server-ver15",
    "Remarks":null
  },
  {
    "Type":"Command line utility",
    "Name":"xclip",
    "Purpose":"Python Dependency",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/astrand\/xclip",
    "Remarks":null
  },
  {
    "Type":"Command line utility",
    "Name":"s3cmd",
    "Purpose":"S3 API",
    "License Type ":"Free",
    "Link":"http:\/\/s3tools.org\/s3cmd",
    "Remarks":null
  },
  {
    "Type":"Command line utility",
    "Name":"curl",
    "Purpose":"command line tool for transferring data with URL syntax",
    "License Type ":"Free",
    "Link":"https:\/\/curl.haxx.se\/download.html",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"Skype",
    "Purpose":"Communications",
    "License Type ":"Free",
    "Link":"https:\/\/www.skype.com\/en\/",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"Zoom",
    "Purpose":"Remote conferencing services",
    "License Type ":"Licensed",
    "Link":"https:\/\/zoom.us\/",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"zoom.us",
    "Purpose":"Remote conferencing services",
    "License Type ":"Free",
    "Link":"https:\/\/zoom.us\/",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"Zoom Room",
    "Purpose":"Remote conferencing services",
    "License Type ":"Free",
    "Link":"https:\/\/zoom.us\/",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"Zoom Info for SalesForce",
    "Purpose":"Prospect and enrich new leads, contacts and accounts with ZoomInfo data.",
    "License Type ":"Licensed",
    "Link":"https:\/\/appexchange.salesforce.com\/appxListingDetail?listingId=a0N30000008a8ljEAA",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"RingCentral",
    "Purpose":"Remote conferencing services",
    "License Type ":"Free",
    "Link":"https:\/\/www.ringcentral.com\/",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"RingCentral Meetings        ",
    "Purpose":"Remote conferencing services for MAC",
    "License Type ":"Free",
    "Link":"https:\/\/www.ringcentral.com\/",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"Hangouts",
    "Purpose":"Communications",
    "License Type ":"Free",
    "Link":"https:\/\/hangouts.google.com\/",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":null,
    "Purpose":"Communications",
    "License Type ":"Free",
    "Link":"https:\/\/hangouts.google.com\/",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"GoTo Opener",
    "Purpose":"Application used by GoTo Opener to launch a user in Active session",
    "License Type ":"Free",
    "Link":"https:\/\/support.logmeininc.com\/gotomeeting\/help\/about-the-goto-opener-g2m850000",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"LogMeIn",
    "Purpose":"Remote Desktop",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.logmein.com\/",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"Google Talk Plugin",
    "Purpose":"Google Chat properties for MAC",
    "License Type ":"Free",
    "Link":"https:\/\/google-talk-plugin.soft32.com\/",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"GoogleTalkPlugin        ",
    "Purpose":"Google Chat properties",
    "License Type ":"Free",
    "Link":"https:\/\/google-talk-plugin.soft32.com\/",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"Uninstall AnyConnect",
    "Purpose":"Uninstall AnyConnect from Mac",
    "License Type ":"Free",
    "Link":"https:\/\/www.cisco.com\/c\/en\/us\/support\/security\/anyconnect-secure-mobility-client\/tsd-products-support-series-home.html",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"WebEx",
    "Purpose":"Remote conferencing services",
    "License Type ":"Free",
    "Link":"https:\/\/www.webex.com\/downloads.html",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"Viber",
    "Purpose":"Communications",
    "License Type ":"Free",
    "Link":"https:\/\/www.viber.com\/download\/",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"AdobeConnect",
    "Purpose":"Webinar tool",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.adobe.com\/products\/adobeconnect.html?sdid=SEMBREXCT&gclid=EAIaIQobChMI7Z3B0buM4wIVxECGCh0uWgr-EAAYASAAEgKCZ_D_BwE",
    "Remarks":null
  },
  {
    "Type":"Communication ",
    "Name":"GoToMeeting",
    "Purpose":"Online meeting, desktop sharing, and video conferencing software ",
    "License Type ":"Free",
    "Link":"https:\/\/www.gotomeeting.com\/b",
    "Remarks":null
  },
  {
    "Type":"Communication ",
    "Name":"GoToOpener",
    "Purpose":"Installed by GoToMeeting",
    "License Type ":"Free",
    "Link":"https:\/\/www.gotomeeting.com\/b",
    "Remarks":null
  },
  {
    "Type":"Communication",
    "Name":"Slack",
    "Purpose":"Team collaboration tool",
    "License Type ":"Free",
    "Link":"https:\/\/slack.com\/",
    "Remarks":null
  },
  {
    "Type":"Compiler ",
    "Name":"g++",
    "Purpose":"Dependency for Protocal Buffer",
    "License Type ":"Free",
    "Link":"https:\/\/gcc.gnu.org\/",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"MySQL Workbench",
    "Purpose":"DBMS tool",
    "License Type ":"Free",
    "Link":"https:\/\/dev.mysql.com\/downloads\/workbench\/?utm_source=tuicool",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"MySQLWorkbench",
    "Purpose":"DBMS tool",
    "License Type ":"Free",
    "Link":"https:\/\/dev.mysql.com\/downloads\/workbench\/?utm_source=tuicool",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"MySQLWorkbench 2",
    "Purpose":"DBMS tool",
    "License Type ":"Free",
    "Link":"https:\/\/dev.mysql.com\/downloads\/workbench\/?utm_source=tuicool",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"mysql-community",
    "Purpose":"DBMS tool for CentOS",
    "License Type ":"Free",
    "Link":"https:\/\/linuxize.com\/post\/install-mysql-on-centos-7\/",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"Aginity Workbench for Redshift",
    "Purpose":"DBMS tool for data analysts and developers",
    "License Type ":"Free",
    "Link":"http:\/\/www.aginity.com\/workbench-overview\/",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"Coginiti Pro",
    "Purpose":"DBMS tool for data analysts and developers",
    "License Type ":"Free",
    "Link":"http:\/\/www.aginity.com\/workbench-overview\/",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"SQL Server ",
    "Purpose":"Stores and retrieves data as requested by other software applications",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cdw.com\/product\/Microsoft-SQL-Server-2017-Standard-license-1-server\/4817457",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"Microsoft ODBC Driver",
    "Purpose":"Needed for db connection",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=50420",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"dbeaver-ce",
    "Purpose":"Database GUI editor.",
    "License Type ":"Free",
    "Link":"https:\/\/dbeaver.io\/download\/",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":".NET",
    "Purpose":"Stores and retrieves data as requested by other software applications",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-gb\/sql-server\/sql-server-downloads",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"RELMA",
    "Purpose":"LOINC Lookup Tool",
    "License Type ":"Free",
    "Link":"https:\/\/loinc.org\/downloads\/relma\/",
    "Remarks":"#168336"
  },
  {
    "Type":"Database",
    "Name":"Microsoft Access",
    "Purpose":"A database management system (DBMS) from Microsoft",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/confirmation.aspx?id=50040",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"pgadmin",
    "Purpose":"Administration platform for PostgreSQL",
    "License Type ":"Free",
    "Link":"https:\/\/www.pgadmin.org\/",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"Prerequisites for SSDT",
    "Purpose":"Installed by SQL Server",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cdw.com\/product\/Microsoft-SQL-Server-2017-Standard-license-1-server\/4817457",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"PostgreSQL 10",
    "Purpose":"managing and developing your databases",
    "License Type ":"Free",
    "Link":"https:\/\/www.postgresql.org\/",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"Microsoft SQL Server Management Studio",
    "Purpose":"For managing any SQL infrastructure",
    "License Type ":"Free",
    "Link":"https:\/\/docs.microsoft.com\/en-us\/sql\/ssms\/download-sql-server-management-studio-ssms?view=sql-server-2017",
    "Remarks":"macOS"
  },
  {
    "Type":"Database",
    "Name":"Integration Services",
    "Purpose":"Dependancy of Microsoft SSMS",
    "License Type ":"Free",
    "Link":"https:\/\/docs.microsoft.com\/en-us\/sql\/ssms\/download-sql-server-management-studio-ssms?view=sql-server-2017",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"SSMS Post Install Tasks        ",
    "Purpose":"Dependancy of Microsoft SSMS",
    "License Type ":"Free",
    "Link":"https:\/\/docs.microsoft.com\/en-us\/sql\/ssms\/download-sql-server-management-studio-ssms?view=sql-server-2017",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"Robo 3T",
    "Purpose":"Mongodb client to query mongodb. Mysql workbench equivalent.",
    "License Type ":"Free",
    "Link":"https:\/\/robomongo.org\/download",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"Studio 3T",
    "Purpose":"Studio 3T, Robo 3T's big brother.",
    "License Type ":"Free",
    "Link":"https:\/\/robomongo.org\/download",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"ElasticSearch Toolbox",
    "Purpose":"distributed search and analytics engine",
    "License Type ":"Free",
    "Link":"https:\/\/www.elastic.co\/downloads\/elasticsearch",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"mysql-workbench",
    "Purpose":"MySQL Workbench - a visual database modeling, administration and queuing tool",
    "License Type ":"Free",
    "Link":"http:\/\/dev.mysql.com\/workbench\/",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"Microsoft Access Runtime 2010",
    "Purpose":"Developing database management solutions",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=10910",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"MariaDB",
    "Purpose":"Open-source relational database management system",
    "License Type ":"Free",
    "Link":"https:\/\/mariadb.com\/",
    "Remarks":null
  },
  {
    "Type":"Database ",
    "Name":"MySQL",
    "Purpose":"Open-source relational database management system",
    "License Type ":"Free",
    "Link":"https:\/\/www.mysql.com\/downloads\/",
    "Remarks":null
  },
  {
    "Type":"Database Design ",
    "Name":"SQLWorkBench",
    "Purpose":"Redshift",
    "License Type ":"Free",
    "Link":"https:\/\/dev.mysql.com\/downloads\/workbench\/?utm_source=tuicool",
    "Remarks":null
  },
  {
    "Type":"Database Design ",
    "Name":"SQLWorkbench\/J",
    "Purpose":"Redshift",
    "License Type ":"Free",
    "Link":"https:\/\/www.sql-workbench.eu\/downloads.html",
    "Remarks":null
  },
  {
    "Type":"Database Design ",
    "Name":"DBeaver",
    "Purpose":"Redshift",
    "License Type ":"Free",
    "Link":"https:\/\/dbeaver.io\/",
    "Remarks":null
  },
  {
    "Type":"Database Design ",
    "Name":"Protocol Buffers",
    "Purpose":"Development",
    "License Type ":"Free",
    "Link":"https:\/\/developers.google.com\/protocol-buffers\/docs\/downloads",
    "Remarks":null
  },
  {
    "Type":"Dependency software",
    "Name":"adobe-flash-properties-gtk",
    "Purpose":"needed for web browser (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/launchpad.net\/ubuntu\/precise\/+package\/adobe-flash-properties-gtk",
    "Remarks":null
  },
  {
    "Type":"Dependency software",
    "Name":"alien",
    "Purpose":"needed for installing rpm packages (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/packages.ubuntu.com\/search?keywords=alien",
    "Remarks":null
  },
  {
    "Type":"Dependency software",
    "Name":"ansible",
    "Purpose":"Docker and Kubernetics (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/docs.ansible.com\/",
    "Remarks":null
  },
  {
    "Type":"Dependency software",
    "Name":"docbook-xml",
    "Purpose":"Docker and Kubernetics (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/packages.ubuntu.com\/trusty\/docbook-xml",
    "Remarks":null
  },
  {
    "Type":"Dependency software",
    "Name":"docbook-xsl",
    "Purpose":"Docker and Kubernetics (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/sourceforge.net\/projects\/docbook\/files\/docbook-xsl\/",
    "Remarks":null
  },
  {
    "Type":"Dependency software",
    "Name":"docker-ce",
    "Purpose":"Docker and Kubernetics (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/docs.docker.com\/install\/linux\/docker-ce\/ubuntu\/",
    "Remarks":null
  },
  {
    "Type":"Dependency software",
    "Name":"ffmpeg",
    "Purpose":"Needed for audio\/video (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/www.ffmpeg.org\/download.html",
    "Remarks":null
  },
  {
    "Type":"Dependency software",
    "Name":"freepats",
    "Purpose":"Needed for audio\/video (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/launchpad.net\/ubuntu\/+source\/freepats",
    "Remarks":null
  },
  {
    "Type":"Dependency software",
    "Name":"frei0r-plugins",
    "Purpose":"Needed for audio\/video (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/packages.ubuntu.com\/search?keywords=frei0r-plugins",
    "Remarks":null
  },
  {
    "Type":"Dependency software",
    "Name":"expect",
    "Purpose":"Automates interactive applications",
    "License Type ":"Free",
    "Link":"https:\/\/sourceforge.net\/projects\/expect\/",
    "Remarks":null
  },
  {
    "Type":"Dependency software",
    "Name":"finger",
    "Purpose":"user information lookup program",
    "License Type ":"Free",
    "Link":"https:\/\/pkgs.org\/download\/finger",
    "Remarks":null
  },
  {
    "Type":"Dependency software",
    "Name":"dos2unix",
    "Purpose":"convert text file line endings between CRLF and LF",
    "License Type ":"Free",
    "Link":"https:\/\/sourceforge.net\/projects\/dos2unix\/",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Acrobat Pro DC",
    "Purpose":"PDF Document Editor",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Adobe Acrobat Reader DC",
    "Purpose":"PDF Document Reader",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Acrobat Distiller",
    "Purpose":"converting documents from PostScript format to Adobe PDF",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Air",
    "Purpose":"Software that creates a cinematic movie titles, intros, and transition",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=E85DE6CDAA9C40FB8553B52564B2176A&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=2XBSC4R3&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe illustrator",
    "Purpose":"Software that creates and edits vector graphics",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=43538F47236C326E137A08307BFA70F2&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=4SC998QL&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Indesign",
    "Purpose":"Desktop publishing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=4C0BE17691903B5FFB8DA282DEAC55FE&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=4X3B94ZK&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Photoshop",
    "Purpose":"Image editing software application ",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=30404A88D89A328584307175B8B27616&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=5F1G8N2F&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Premiere",
    "Purpose":"Video editing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Animate",
    "Purpose":"Video editing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Audition",
    "Purpose":"Video editing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Bridge",
    "Purpose":"Video editing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Character Animator",
    "Purpose":"Video editing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Creative Cloud",
    "Purpose":"Video editing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Dimension",
    "Purpose":"Video editing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Lightroom",
    "Purpose":"Video editing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe InCopy",
    "Purpose":"Video editing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Dreamweaver",
    "Purpose":"Video editing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe Prelude",
    "Purpose":"Video editing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Adobe After Effects",
    "Purpose":"digital visual effects",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Design ",
    "Name":"Image Resizer for Windows",
    "Purpose":"Edits image files",
    "License Type ":"Free",
    "Link":"https:\/\/www.bricelam.net\/ImageResizer\/",
    "Remarks":null
  },
  {
    "Type":"Design ",
    "Name":"Adobe Air",
    "Purpose":"Used by Balsamique",
    "License Type ":"Licensed",
    "Link":"https:\/\/get.adobe.com\/air\/otherversions\/",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"Aplhacard ID Suite",
    "Purpose":"ID Card priner design tool",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.alphacard.com\/",
    "Remarks":null
  },
  {
    "Type":"Design",
    "Name":"BlackMagic Raw",
    "Purpose":"Working with raw video files",
    "License Type ":"Free",
    "Link":"https:\/\/www.blackmagicdesign.com\/support\/",
    "Remarks":null
  },
  {
    "Type":"Development",
    "Name":"valet",
    "Purpose":"Localsite opened with https",
    "License Type ":"Free",
    "Link":"https:\/\/cpriego.github.io\/valet-linux\/",
    "Remarks":null
  },
  {
    "Type":"Development",
    "Name":"Android Studio",
    "Purpose":"programming environment for Android",
    "License Type ":"Free",
    "Link":"https:\/\/developer.android.com\/studio\/#downloads",
    "Remarks":null
  },
  {
    "Type":"Development",
    "Name":"jmeter",
    "Purpose":"load test functional behavior and measure performance",
    "License Type ":"Free",
    "Link":"https:\/\/jmeter.apache.org\/",
    "Remarks":null
  },
  {
    "Type":"Development",
    "Name":"TxText Control",
    "Purpose":"application for Letter Tool",
    "License Type ":"Free",
    "Link":"https:\/\/www.textcontrol.com\/",
    "Remarks":null
  },
  {
    "Type":"Diagnostic tool",
    "Name":"UmbrellaDiagnostic",
    "Purpose":"Cisco AnyConnect Diagnostic tool",
    "License Type ":"Free",
    "Link":"http:\/\/www.opendns.com\/download\/mac\/diagnostic",
    "Remarks":null
  },
  {
    "Type":"Directory Service",
    "Name":"Jumpcloud",
    "Purpose":"Directory Service",
    "License Type ":"Licensed",
    "Link":"https:\/\/support.jumpcloud.com\/customer\/portal\/articles\/2403462-jumpcloud-agent-windows-installation-walkthrough",
    "Remarks":null
  },
  {
    "Type":"Directory Service",
    "Name":"jumpcloud-agent-app 1.5.1",
    "Purpose":"Directory Service",
    "License Type ":"Licensed",
    "Link":"https:\/\/support.jumpcloud.com\/customer\/portal\/articles\/2403462-jumpcloud-agent-windows-installation-walkthrough",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"NVIDIA ",
    "Purpose":"driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.geforce.com\/drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Canon MF",
    "Purpose":"Printer Driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.usa.canon.com\/internet\/portal\/us\/home\/support\/details\/printers\/support-laser-printers-imageclass\/imageclass-mf4450",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"EPSON",
    "Purpose":"Printer Driver",
    "License Type ":"Free",
    "Link":"http:\/\/www.driversepson.com\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"HP LaserJet ",
    "Purpose":"Printer Driver",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"64 Bit HP CIO Components Installer",
    "Purpose":"Part of HP Printer Driver",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Dolby Audio",
    "Purpose":"Audio Driver for computers",
    "License Type ":"Free",
    "Link":"https:\/\/www.dolby.com\/us\/en\/drivers.html",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Dolby Digital Plus",
    "Purpose":"Audio Driver for computers",
    "License Type ":"Free",
    "Link":"https:\/\/www.dolby.com\/us\/en\/drivers.html",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"HP LJ M1530",
    "Purpose":"Hp Printer Basic Software Drivers ",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"hppFaxUtility",
    "Purpose":"Hp Printer Basic Software Drivers ",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"hppFonts",
    "Purpose":"Hp Printer Basic Software Drivers ",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"hppLaserJetService",
    "Purpose":"Hp Printer Basic Software Drivers ",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"hppLJM2727",
    "Purpose":"Hp Printer Basic Software Drivers ",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"hppManualsM2727",
    "Purpose":"Hp Printer Basic Software Drivers ",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"hppScanTo",
    "Purpose":"Hp Printer Basic Software Drivers ",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"hppSendFaxM2727",
    "Purpose":"Hp Printer Basic Software Drivers ",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"hppTLBXFXM2727",
    "Purpose":"Hp Printer Basic Software Drivers ",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"hppusgM2727",
    "Purpose":"Hp Printer Basic Software Drivers ",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"HPSSupply",
    "Purpose":"Hp Printer Basic Software Drivers ",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"hpzTLBXFX",
    "Purpose":"Hp Printer Basic Software Drivers ",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers\/selfservice\/hp-universal-fax-driver-series-for-windows\/7529318",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Intel(R) Processor Graphics",
    "Purpose":"Software that controls a computer's video adapter ",
    "License Type ":"Free",
    "Link":"https:\/\/downloadcenter.intel.com\/product\/80939\/Graphics-Drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Intel(R) Graphics Media Accelerator Driver",
    "Purpose":"Intel Graphics Driver",
    "License Type ":"Free",
    "Link":"https:\/\/downloadcenter.intel.com\/product\/80939\/Graphics-Drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"EasyCamera",
    "Purpose":"Enables Lenevo Camera for skype and other applications",
    "License Type ":"Free",
    "Link":"https:\/\/support.lenovo.com\/de\/en\/downloads\/ds031749",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Lenovo Yoga Mode Control (Inf Install)",
    "Purpose":"Service program to or enable keyboard and touchpad",
    "License Type ":"Free",
    "Link":"https:\/\/pcsupport.lenovo.com\/de\/en\/products\/laptops-and-netbooks\/yoga-series\/yoga-3-pro-1370-laptop-lenovo\/downloads\/ds104833",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Realtek High Definition Audio Driver",
    "Purpose":"Audio Driver for computers ",
    "License Type ":"Free",
    "Link":"http:\/\/www.realtek.com.tw\/DOWNLOADS\/downloadsCheck.aspx?Langid=1&PNid=14&PFid=24&Level=4&Conn=3&DownTypeID=3",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Toner Status",
    "Purpose":"Check estimated ink or toner levels for HP Printer ",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/lt-en\/document\/c04927206",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Vulkan Run Time Libraries 1.0.33.0",
    "Purpose":"Provide lower overhead and controll over the GPU and lower CPU usage",
    "License Type ":"Free",
    "Link":"https:\/\/www.lunarg.com\/vulkan-sdk\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Vulkan Run Time Libraries 1.0.42.0",
    "Purpose":"Provide lower overhead and controll over the GPU and lower CPU usage",
    "License Type ":"Free",
    "Link":"https:\/\/www.lunarg.com\/vulkan-sdk\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Realtek Card Reader",
    "Purpose":"Read digital camera media cards via a USB port ",
    "License Type ":"Free",
    "Link":"http:\/\/www.realtek.com.tw\/Downloads\/downloadsView.aspx?Conn=3&DownTypeID=3&Level=4&PFid=25&PNid=15",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"USB Ethernet Adapter",
    "Purpose":"USB2.0 To Fast Ethernet Adapter Driver",
    "License Type ":"Free",
    "Link":"https:\/\/drp.su\/en\/devices\/lan\/corechip\/rd9700-usb2-0-to-fast-ethernet-adapter",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Atheros Client Installation Program",
    "Purpose":"Driver for Wifi ",
    "License Type ":"Free",
    "Link":"https:\/\/www.ath-drivers.eu\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Synaptics driver",
    "Purpose":"Synaptics Pointing Device Driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.quora.com\/What-is-a-synaptic-pointing-device-Should-you-remove-it-from-your-PC",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"NpDvrClient",
    "Purpose":"DVR plugin driver",
    "License Type ":"Free",
    "Link":"http:\/\/10.100.255.130\/DvrWebClient.exe",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"ELAN Touchpad",
    "Purpose":"Laptop touchpad driver",
    "License Type ":"Free",
    "Link":"http:\/\/drivers.softpedia.com\/get\/KEYBOARD-and-MOUSE\/Elantech\/ELAN-Touchpad-Driver-152123-for-Windows-10-Anniversary-Update.shtml",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Dell Touchpad",
    "Purpose":"Dell Touchpad Driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.dell.com\/support\/home\/us\/en\/04\/drivers\/driversdetails?driverid=1jw07",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"AMD",
    "Purpose":"AMD Driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.amd.com\/en\/support\/kb\/release-notes\/rn-rad-win-15-7-1",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Catalyst Control Center",
    "Purpose":"AMD Driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.amd.com\/en\/support\/kb\/release-notes\/rn-rad-win-15-7-1",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Maxx Audio Installer",
    "Purpose":"Dell's Audio driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.dell.com\/support\/home\/us\/en\/04\/drivers\/driversdetails?driverid=r70v3",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Conexant ",
    "Purpose":"Audio driver",
    "License Type ":"Free",
    "Link":"https:\/\/drivers.softpedia.com\/get\/SOUND-CARD\/Conexant\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Realtek Audio",
    "Purpose":"Audio driver",
    "License Type ":"Free",
    "Link":"https:\/\/realtek-hd-audio-drivers-vista.en.softonic.com\/download",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Canon Drivers",
    "Purpose":"Printer Driver",
    "License Type ":"Free",
    "Link":"https:\/\/support-th.canon-asia.com\/contents\/TH\/EN\/0100297401.html",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Intel(R)",
    "Purpose":"Intel chip based driver",
    "License Type ":"Free",
    "Link":"https:\/\/downloadcenter.intel.com\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Lenovo Power Management Driver",
    "Purpose":"Lenovo driver",
    "License Type ":"Free",
    "Link":"https:\/\/support.lenovo.com\/us\/en\/solutions\/tvsu-update",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"ALPS Touch Pad Driver",
    "Purpose":"ALPS Touch Pad Driver",
    "License Type ":"Free",
    "Link":"https:\/\/drivers.softpedia.com\/get\/KEYBOARD-and-MOUSE\/ALPS\/Alps-Pointing-Device-Driver-100404114-for-Windows-10.shtml",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Acer Care Center",
    "Purpose":"Acer driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.acer.com\/ac\/en\/US\/content\/drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Acer Collection",
    "Purpose":"Acer driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.acer.com\/ac\/en\/US\/content\/drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Acer Configuration Manager",
    "Purpose":"Acer driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.acer.com\/ac\/en\/US\/content\/drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Acer Quick Access",
    "Purpose":"Acer driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.acer.com\/ac\/en\/US\/content\/drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Acer UEIP Framework",
    "Purpose":"Acer driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.acer.com\/ac\/en\/US\/content\/drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"CCC Help",
    "Purpose":"Catalyst Graphics Adapter software configuration program for ATI graphic cards",
    "License Type ":"Free",
    "Link":"https:\/\/www.amd.com\/en\/support\/kb\/faq\/ccc-install#faq-How-to-install-AMD-Catalyst%E2%84%A2-Drivers-in-a-Windows-10-based-system",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Ansel",
    "Purpose":"Video driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.geforce.com\/hardware\/technology\/ansel",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Vulkan Run Time Libraries",
    "Purpose":"Display card driver",
    "License Type ":"Free",
    "Link":"https:\/\/developer.nvidia.com\/vulkan-driver",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Qualcomm Atheros",
    "Purpose":"Qualcomm drivers for Windows",
    "License Type ":"Free",
    "Link":"https:\/\/www.ath-drivers.eu\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"LM129",
    "Purpose":"Printer Driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.driverdouble.com\/drivers\/lm129.html",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"HP Customer Participation Program 9.0",
    "Purpose":"Printer Driver",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Universal CRT",
    "Purpose":"Management application",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=48234",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"hppusgP1000",
    "Purpose":"Printer Driver",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"MarketResearch",
    "Purpose":"Hewlett-Packard",
    "License Type ":"Free",
    "Link":"https:\/\/support.hp.com\/us-en\/drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"MrvlUsgTracking",
    "Purpose":"Marvell Semiconductor Pvt Ltd",
    "License Type ":"Free",
    "Link":"https:\/\/www.marvell.com\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"SHIELD Streaming",
    "Purpose":"NVIDIA Corporation",
    "License Type ":"Free",
    "Link":"https:\/\/www.geforce.com\/drivers",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"ccc-utility64",
    "Purpose":"Catalyst Graphics Adapter software configuration program for ATI graphic cards",
    "License Type ":"Free",
    "Link":"https:\/\/www.amd.com\/en\/support\/kb\/faq\/ccc-install#faq-How-to-install-AMD-Catalyst%E2%84%A2-Drivers-in-a-Windows-10-based-system",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Dashlane Upgrade Service",
    "Purpose":"Driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.dashlane.com\/download#downloaded",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"HP PageWide Pro 477dw MFP",
    "Purpose":"Printer Driver for Mac",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Realtek Ethernet Controller",
    "Purpose":"Ehernet driver",
    "License Type ":"Free",
    "Link":"https:\/\/support.lenovo.com\/us\/en\/downloads\/DS040366",
    "Remarks":"Microsoft Windows 10 Enterprise"
  },
  {
    "Type":"Driver",
    "Name":"HP Scanner 3",
    "Purpose":"Printer Driver for Mac",
    "License Type ":"Free",
    "Link":"https:\/\/www.drivers.com\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"rastertofax",
    "Purpose":"Printer Driver for Mac",
    "License Type ":"Free",
    "Link":"https:\/\/www.drivers.com\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"fax",
    "Purpose":"Printer Driver for Mac",
    "License Type ":"Free",
    "Link":"https:\/\/www.drivers.com\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"hpPreProcessing",
    "Purpose":"Printer Driver for Mac",
    "License Type ":"Free",
    "Link":"https:\/\/www.drivers.com\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"commandtohp",
    "Purpose":"management application for Ruby",
    "License Type ":"Free",
    "Link":"https:\/\/www.drivers.com\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"ScanEventHandler",
    "Purpose":"Printer Driver for Mac",
    "License Type ":"Free",
    "Link":"https:\/\/www.drivers.com\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Maxx Audio Installer (x64)",
    "Purpose":"Audio Driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.dell.com\/support\/home\/us\/en\/04\/drivers\/driversdetails?driverid=r70v3",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"ELAN FingerPrint",
    "Purpose":"Fringer Print Driver",
    "License Type ":"Free",
    "Link":"https:\/\/drivers.softpedia.com\/get\/KEYBOARD-and-MOUSE\/Elantech\/ELAN-Fingerprint-Driver-1-1-0-2111-for-Windows-10-Creators-Update.shtml",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Optoma HDCast Pro",
    "Purpose":"Projector Driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.optoma.com\/hdcastpro\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Alphacard ID car printer driver",
    "Purpose":"ID card printer driver",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.alphacard.com\/",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"Logi Options",
    "Purpose":"Logitech Mouse Driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.logitech.com\/en-us\/product\/options",
    "Remarks":null
  },
  {
    "Type":"File Compression",
    "Name":"7-Zip",
    "Purpose":"File archiver with a high compression ratio",
    "License Type ":"Free",
    "Link":"https:\/\/www.7-zip.org\/download.html",
    "Remarks":null
  },
  {
    "Type":"File Compression",
    "Name":"The Unarchiver",
    "Purpose":"Archive file extractor for MacOS",
    "License Type ":"Free",
    "Link":"https:\/\/theunarchiver.com\/",
    "Remarks":"#170559"
  },
  {
    "Type":"File Compression",
    "Name":"iZip",
    "Purpose":"Archive file extractor for MacOS",
    "License Type ":"Free",
    "Link":"https:\/\/itunes.apple.com\/us\/app\/izip-unarchiver-rar-7z-zip-decompressor\/id717545828?mt=12",
    "Remarks":null
  },
  {
    "Type":"File Compression",
    "Name":"7zip",
    "Purpose":"Very high compression ratio file archiver",
    "License Type ":"Free",
    "Link":"https:\/\/centos.pkgs.org\/7\/slce-x86_64\/p7zip-9.20.1-1.el7.x86_64.rpm.html",
    "Remarks":null
  },
  {
    "Type":"File storage and backup",
    "Name":"Google Drive",
    "Purpose":"File storage and synchronization service ",
    "License Type ":"Free",
    "Link":"https:\/\/www.google.com\/drive\/download\/",
    "Remarks":null
  },
  {
    "Type":"File storage and backup",
    "Name":"Google Drive File Stream",
    "Purpose":"File storage and synchronization service ",
    "License Type ":"Free",
    "Link":"https:\/\/www.google.com\/drive\/download\/",
    "Remarks":null
  },
  {
    "Type":"File storage and backup",
    "Name":"Backup and Sync from Google",
    "Purpose":"Safely backups and synchronize files from goole drive",
    "License Type ":"Free",
    "Link":"https:\/\/www.google.com\/drive\/download\/backup-and-sync\/",
    "Remarks":null
  },
  {
    "Type":"File storage and backup",
    "Name":"Google Drive Sync",
    "Purpose":"Web based file storage and synchronization service",
    "License Type ":"Free",
    "Link":"https:\/\/www.google.com\/drive\/download\/",
    "Remarks":null
  },
  {
    "Type":"File storage and backup",
    "Name":"Microsoft OneDrive",
    "Purpose":"File storage and synchronization service ",
    "License Type ":"Free",
    "Link":"https:\/\/onedrive.live.com\/",
    "Remarks":null
  },
  {
    "Type":"File Transfer",
    "Name":"S3 Browser",
    "Purpose":"Windows client for Amazon S3 and Amazon CloudFront",
    "License Type ":"Free",
    "Link":"http:\/\/s3browser.com\/",
    "Remarks":null
  },
  {
    "Type":"File Transfer",
    "Name":"Commander One",
    "Purpose":"for s3 bucket",
    "License Type ":"Licensed",
    "Link":"https:\/\/commander-one.en.softonic.com\/mac",
    "Remarks":null
  },
  {
    "Type":"File Trasnfer",
    "Name":"Transmit",
    "Purpose":"For FTP client",
    "License Type ":"Licensed",
    "Link":"https:\/\/panic.com\/transmit\/",
    "Remarks":null
  },
  {
    "Type":"Healthcare",
    "Name":"CareEnhance. Review Manager",
    "Purpose":"Custom application needed to deploy for some client CM",
    "License Type ":"Licensed",
    "Link":"https:\/\/um5.rchitexas.org:8087\/rm\/iqm\/html\/index.html?Admin=N&integration=&appType=CERME&locale=en_US&b2sw=N&",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"PyCharm CE",
    "Purpose":"Integrated Development Environment for Python Developers",
    "License Type ":"Free",
    "Link":"https:\/\/www.jetbrains.com\/pycharm\/download\/#section=linux",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"IntelliJ IDEA",
    "Purpose":"Integrated Development Environment for JAVA Developers",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.jetbrains.com\/idea\/buy\/#edition=commercial",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"Intellij (Ultimate)",
    "Purpose":"Integrated Development Environment for JAVA Developers",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.jetbrains.com\/idea\/buy\/#edition=commercial",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"Visual Studio",
    "Purpose":"Integrated Development Environment based on Windows API",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cdw.com\/product\/Microsoft-Visual-Studio-Professional-2017-license-1-user\/4568487?RecommendedForEDC=4564659&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"Microsoft Visual C++",
    "Purpose":"Included as part of Microsoft Visual Studio",
    "License Type ":"Free",
    "Link":"https:\/\/support.microsoft.com\/en-us\/help\/2977003\/the-latest-supported-visual-c-downloads",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"Microsoft .NET",
    "Purpose":"A development platform for building apps for web, and various OS",
    "License Type ":"Free",
    "Link":"https:\/\/docs.microsoft.com\/en-us\/dotnet\/standard\/",
    "Remarks":"|"
  },
  {
    "Type":"IDE",
    "Name":"IntelliJ Community Version        ",
    "Purpose":"Hadoop\/ Spark",
    "License Type ":"Free",
    "Link":"https:\/\/www.jetbrains.com\/idea\/download\/#section=linux",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"Visual Studio Code",
    "Purpose":"A lightweight but powerful source code editor",
    "License Type ":"Free",
    "Link":"https:\/\/code.visualstudio.com\/",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"python3-pip",
    "Purpose":"Python Dependency",
    "License Type ":"Free",
    "Link":"https:\/\/pypi.org\/project\/pip\/",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"pyoo",
    "Purpose":"Python Dependency",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/seznam\/pyoo",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"boto",
    "Purpose":"Python Dependency",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/boto\/boto",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"NetBeans",
    "Purpose":"An integrated development environment for Java",
    "License Type ":"Free",
    "Link":"http:\/\/netbeans.org\/downloads\/",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"Anaconda",
    "Purpose":"Open source distribution of Python",
    "License Type ":"Free",
    "Link":"https:\/\/www.anaconda.com\/download\/",
    "Remarks":"#169551"
  },
  {
    "Type":"IDE",
    "Name":"Microsoft ASP.NET",
    "Purpose":"Open-source server-side web application framework.",
    "License Type ":"Free",
    "Link":"https:\/\/www.asp.net\/downloads",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"Active Directory Authentication Library",
    "Purpose":"Installed by Visual Studio",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=48742 ",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"Microsoft NetStandard SDK",
    "Purpose":"Extension tool for Visual Studio",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/net\/download",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"vs",
    "Purpose":"Installed by Visual Studio",
    "License Type ":"Licensed",
    "Link":"https:\/\/support.microsoft.com\/en-us\/help\/2977003\/the-latest-supported-visual-c-downloads",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"Roslyn Language Services",
    "Purpose":"An extension to Visual Studio",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=34685",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"icecap",
    "Purpose":"Installed by Visual Studio",
    "License Type ":"Licensed",
    "Link":"https:\/\/support.microsoft.com\/en-us\/help\/2977003\/the-latest-supported-visual-c-downloads",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"MSI Development Tools",
    "Purpose":"Installed by Visual Studio",
    "License Type ":"Licensed",
    "Link":"https:\/\/support.microsoft.com\/en-us\/help\/2977003\/the-latest-supported-visual-c-downloads",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"DiagnosticsHub_CollectionService",
    "Purpose":"Installed by Visual Studio",
    "License Type ":"Licensed",
    "Link":"https:\/\/support.microsoft.com\/en-us\/help\/2977003\/the-latest-supported-visual-c-downloads",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"IntelliTraceProfilerProxy",
    "Purpose":"Installed by Visual Studio",
    "License Type ":"Free",
    "Link":"https:\/\/developercommunity.visualstudio.com\/content\/problem\/245109\/packageidmicrosoftintellitraceprofilerproxymsipack-4.html",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"code",
    "Purpose":"Installed by Visual Studio",
    "License Type ":"Free",
    "Link":"https:\/\/developercommunity.visualstudio.com\/content\/problem\/245109\/packageidmicrosoftintellitraceprofilerproxymsipack-4.html",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"Entity Framework 6.2.0 Tools for Visual Studio 2017",
    "Purpose":"Installed by Visual Studio",
    "License Type ":"Free",
    "Link":"https:\/\/developercommunity.visualstudio.com\/content\/problem\/245109\/packageidmicrosoftintellitraceprofilerproxymsipack-4.html",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"pycharm-community",
    "Purpose":"The Most Intelligent Python IDE",
    "License Type ":"Free",
    "Link":"https:\/\/www.jetbrains.com\/pycharm\/",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"JupyterLab",
    "Purpose":"Primarily this would be for the machine learning team.",
    "License Type ":"Free",
    "Link":"https:\/\/jupyter.org\/",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"RStudio",
    "Purpose":"IDE for R",
    "License Type ":"Free",
    "Link":"https:\/\/www.r-project.org\/",
    "Remarks":null
  },
  {
    "Type":"Management application",
    "Name":"RubyGems",
    "Purpose":"management application for Ruby",
    "License Type ":"Free",
    "Link":"https:\/\/www.heatware.net\/ruby-rails\/how-to-install-rubygems-linux-ubuntu-10\/",
    "Remarks":null
  },
  {
    "Type":"Management application",
    "Name":"libmysqlclient-dev",
    "Purpose":"Installed by rubygems",
    "License Type ":"Free",
    "Link":"https:\/\/www.heatware.net\/ruby-rails\/how-to-install-rubygems-linux-ubuntu-10\/",
    "Remarks":null
  },
  {
    "Type":"Management application",
    "Name":"NXLog-CE",
    "Purpose":"collects and forwards Microsoft Windows events to Alienvault",
    "License Type ":"Free",
    "Link":"https:\/\/nxlog.co\/products\/nxlog-community-edition\/download",
    "Remarks":null
  },
  {
    "Type":"Media",
    "Name":"VLC",
    "Purpose":"Media Player",
    "License Type ":"Free",
    "Link":"https:\/\/www.videolan.org\/vlc\/index.html",
    "Remarks":null
  },
  {
    "Type":"Media",
    "Name":"Sparkol VideoScribe",
    "Purpose":"application used for creating whiteboard animation video.",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.videoscribe.co\/en\/Login?ReturnURL=\/en\/Download",
    "Remarks":null
  },
  {
    "Type":"Media",
    "Name":"QuickTime",
    "Purpose":"Media Player",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com\/kb\/DL837?locale=en_GB",
    "Remarks":null
  },
  {
    "Type":"Media",
    "Name":"Apple Application Support",
    "Purpose":"Installed by QuickTime",
    "License Type ":"Free",
    "Link":"https:\/\/support.apple.com\/kb\/DL923?locale=en_GB",
    "Remarks":null
  },
  {
    "Type":"Media",
    "Name":"Adobe Fuse CC (Beta)",
    "Purpose":"Video editing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Media",
    "Name":"Adobe Media Encoder CC 2018",
    "Purpose":"Video editing software application",
    "License Type ":"Licensed",
    "Link":"https:\/\/commerce.adobe.com\/anyware\/checkout\/?clientId=creative&countryCode=US&languageCode=en&marketSegment=COM&items%5B0%5D%5BofferId%5D=19AEE5AC1C9242C37657987E009E6553&items%5B0%5D%5Bquantity%5D=1&returnUrl=undefined&promoid=61PM81D8&mv=other&landscape=prod",
    "Remarks":null
  },
  {
    "Type":"Microsoft",
    "Name":"Microsoft PowerPoint",
    "Purpose":"Office Package for Mac",
    "License Type ":"Licensed",
    "Link":"https:\/\/products.office.com\/en-ww\/mac",
    "Remarks":null
  },
  {
    "Type":"Microsoft",
    "Name":"Microsoft Excel",
    "Purpose":"Office Package for Mac",
    "License Type ":"Licensed",
    "Link":"https:\/\/products.office.com\/en-ww\/mac",
    "Remarks":null
  },
  {
    "Type":"Microsoft",
    "Name":"Microsoft Outlook",
    "Purpose":"Office Package for Mac",
    "License Type ":"Licensed",
    "Link":"https:\/\/products.office.com\/en-ww\/mac",
    "Remarks":null
  },
  {
    "Type":"Microsoft",
    "Name":"Microsoft OneNote",
    "Purpose":"Office Package for Mac",
    "License Type ":"Licensed",
    "Link":"https:\/\/products.office.com\/en-ww\/mac",
    "Remarks":null
  },
  {
    "Type":"Microsoft",
    "Name":"Microsoft Word",
    "Purpose":"Office Package for Mac",
    "License Type ":"Licensed",
    "Link":"https:\/\/products.office.com\/en-ww\/mac",
    "Remarks":null
  },
  {
    "Type":"Microsoft",
    "Name":"Microsoft AutoUpdate",
    "Purpose":"Office Package for Mac",
    "License Type ":"Licensed",
    "Link":"https:\/\/products.office.com\/en-ww\/mac",
    "Remarks":null
  },
  {
    "Type":"Microsoft",
    "Name":"Microsoft Teams",
    "Purpose":"Office Package for Mac",
    "License Type ":"Licensed",
    "Link":"https:\/\/products.office.com\/en-ww\/mac",
    "Remarks":null
  },
  {
    "Type":"Microsoft",
    "Name":"Microsoft Policy Platform",
    "Purpose":"Needed to evaluate compliance settings.",
    "License Type ":"Free",
    "Link":"https:\/\/docs.microsoft.com\/en-us\/sccm\/core\/clients\/deploy\/prerequisites-for-deploying-clients-to-windows-computers",
    "Remarks":null
  },
  {
    "Type":"Microsoft",
    "Name":"Microsoft Report Viewer 2012 Runtime",
    "Purpose":"Report Viewer",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=35747",
    "Remarks":null
  },
  {
    "Type":"Miscellaneous",
    "Name":"WinRT Intellisense",
    "Purpose":"Shareware software",
    "License Type ":"Free",
    "Link":"https:\/\/winrt-intellisense-uap-en-us.updatestar.com\/en",
    "Remarks":null
  },
  {
    "Type":"Miscellaneous",
    "Name":"Google Music Player ",
    "Purpose":"Music Player",
    "License Type ":"Free",
    "Link":"https:\/\/www.googleplaymusicdesktopplayer.com\/",
    "Remarks":null
  },
  {
    "Type":"Miscellaneous",
    "Name":"Color Picker",
    "Purpose":"Color combination tool",
    "License Type ":"Free",
    "Link":"www.tucows.com\/preview\/1294630\/Color-Picker",
    "Remarks":null
  },
  {
    "Type":"Mockup",
    "Name":"Balsamiq",
    "Purpose":"Mockup tool",
    "License Type ":"Licensed",
    "Link":"https:\/\/balsamiq.com\/wireframes\/",
    "Remarks":null
  },
  {
    "Type":"Mockup",
    "Name":"WireframePro - Free Version",
    "Purpose":"Mockup tool",
    "License Type ":"Free",
    "Link":"https:\/\/mockflow.com\/desktop\/",
    "Remarks":null
  },
  {
    "Type":"Mockup",
    "Name":"Adobe XD - Free version",
    "Purpose":"Mockup tool",
    "License Type ":"Free",
    "Link":"https:\/\/www.adobe.com\/products\/xd.html?sdid=12B9F15S&mv=Search&ef_id=EAIaIQobChMI1uPA3POi4QIVzksNCh3NigdQEAAYASAAEgIQCfD_BwE:G:s&s_kwcid=AL!3085!3!315233774100!b!!g!!adobe%20xd%20free",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"Observium",
    "Purpose":"SysLog and Network Monitoring",
    "License Type ":"Free",
    "Link":"http:\/\/www.observium.org\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"Rancid",
    "Purpose":"Config change tracker",
    "License Type ":"Free",
    "Link":"http:\/\/www.shrubbery.net\/rancid\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"Belarc Advisor",
    "Purpose":"IT Asset Management",
    "License Type ":"Free",
    "Link":"https:\/\/www.belarc.com\/products_belarc_advisor",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"WinMTR",
    "Purpose":"Network Diagnostic Tool",
    "License Type ":"Free",
    "Link":"http:\/\/winmtr.net\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"mtr",
    "Purpose":"Network Diagnostic Tool",
    "License Type ":"Free",
    "Link":"https:\/\/www.tecmint.com\/mtr-a-network-diagnostic-tool-for-linux\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"WinBox",
    "Purpose":"Mikrotik Administration Tool",
    "License Type ":"Free",
    "Link":"https:\/\/mikrotik.com\/download",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"SmokePing",
    "Purpose":"Network Latency Tracker",
    "License Type ":"Free",
    "Link":"https:\/\/oss.oetiker.ch\/smokeping\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"NCell Connect",
    "Purpose":"NCell's Internet dongle connection tool",
    "License Type ":"Free",
    "Link":"https:\/\/www.ncell.axiata.com\/Internet\/Rates-and-Information\/How-to-setup-internet-in-my-computer",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"Angry IP Scanner",
    "Purpose":"Angry IP Scanner - fast and friendly IP Scanner",
    "License Type ":"Free",
    "Link":"http:\/\/angryip.org\/download\/#linux",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"ipscan",
    "Purpose":"Angry IP Scanner - fast and friendly IP Scanner",
    "License Type ":"Free",
    "Link":"http:\/\/angryip.org\/download\/#linux",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"SolarWinds SNMP Enabler for Windows",
    "Purpose":"Remotely configure SNMP on Windows servers and workstations",
    "License Type ":"Free",
    "Link":"https:\/\/www.solarwinds.com\/free-tools\/snmp-enabler-for-windows",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"Ossec",
    "Purpose":"Free, open source host-based intrusion detection system (HIDS)",
    "License Type ":"Free",
    "Link":"https:\/\/www.ossec.net\/downloads.html",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"SolarWinds Event Log Consolidator",
    "Purpose":"Consolidates logs from up to five Windows servers or workstations.",
    "License Type ":"Free",
    "Link":"https:\/\/www.solarwinds.com\/free-tools\/event-log-consolidator",
    "Remarks":"#171059"
  },
  {
    "Type":"Network",
    "Name":"SolarWinds Event Log Forwarder for Windows",
    "Purpose":"Forwards Windows event logs as syslog messages to any syslog service",
    "License Type ":"Free",
    "Link":"https:\/\/www.solarwinds.com\/free-tools\/event-log-forwarder-for-windows",
    "Remarks":"#171059"
  },
  {
    "Type":"Network",
    "Name":"ocsinventory-agent",
    "Purpose":"Provides inventory of PCs (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/www.ocsinventory-ng.org\/en\/download-en\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"OCSNG",
    "Purpose":"Provides inventory of PCs (MacOS)",
    "License Type ":"Free",
    "Link":"https:\/\/www.ocsinventory-ng.org\/en\/download-en\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"OCS Inventory NG Agent",
    "Purpose":"Provides inventory of PCs (WinOS)",
    "License Type ":"Free",
    "Link":"https:\/\/www.ocsinventory-ng.org\/en\/download-en\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"OCS Inventory NG Agent 2.4.0.0",
    "Purpose":"Provides inventory of PCs (WinOS)",
    "License Type ":"Free",
    "Link":"https:\/\/www.ocsinventory-ng.org\/en\/download-en\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"ocsinventory-reports",
    "Purpose":"Provides inventory of PCs",
    "License Type ":"Free",
    "Link":"https:\/\/www.ocsinventory-ng.org\/en\/download-en\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"ocsinventory-server",
    "Purpose":"Provides inventory of PCs",
    "License Type ":"Free",
    "Link":"https:\/\/www.ocsinventory-ng.org\/en\/download-en\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"pbis agent",
    "Purpose":"Used to join linux instances in AD",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/BeyondTrust\/pbis-open\/wiki",
    "Remarks":"175531"
  },
  {
    "Type":"Network",
    "Name":"ZKTeco",
    "Purpose":"Door Access Control Software",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.zkteco.com\/en\/product_category\/70.html",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"ZKAccess3.5 Security System",
    "Purpose":"Door Access Control Software (updated software version)",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.zkteco.com\/en\/product_category\/70.html",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"Kantech",
    "Purpose":"Door Access Control Software (updated software version)",
    "License Type ":"Licensed",
    "Link":"http:\/\/www.kantech.com\/Products\/Default.aspx",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"Windows Firewall Configuration Provider",
    "Purpose":"Used by SCCM to manage the Windows Firewall using a Group Policy ",
    "License Type ":"Free",
    "Link":"https:\/\/www.prajwaldesai.com\/configuring-firewall-settings-for-configuration-manager-2012-r2\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"Configuration Manager Client",
    "Purpose":"SCCM's client",
    "License Type ":"Free",
    "Link":"https:\/\/www.prajwaldesai.com\/install-configuration-manager-clients-using-client-push\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"net-snmp",
    "Purpose":"A collection of SNMP protocol tools and libraries",
    "License Type ":"Free",
    "Link":"www.net-snmp.org\/download\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"jwhois",
    "Purpose":"Internet whois\/nicname client",
    "License Type ":"Free",
    "Link":"https:\/\/www.gnu.org\/software\/jwhois\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"fping",
    "Purpose":"Scriptable, parallelized ping-like utility",
    "License Type ":"Free",
    "Link":"https:\/\/fping.org",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"graphviz",
    "Purpose":"Graph Visualization Tools",
    "License Type ":"Free",
    "Link":"https:\/\/www.graphviz.org\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"postfix",
    "Purpose":"Postfix Mail Transport Agent",
    "License Type ":"Free",
    "Link":"www.postfix.org\/download.html",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"rrdtool",
    "Purpose":"Round Robin Database Tool to store and display time-series data",
    "License Type ":"Free",
    "Link":"https:\/\/oss.oetiker.ch\/rrdtool",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"mcrypt",
    "Purpose":"Replacement for crypt()",
    "License Type ":"Free",
    "Link":"https:\/\/sourceforge.net\/projects\/mcrypt\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"htop",
    "Purpose":"Interactive process viewer",
    "License Type ":"Free",
    "Link":"https:\/\/sourceforge.net\/projects\/htop\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"rsyslog",
    "Purpose":"Enhanced system logging and kernel message trapping daemon",
    "License Type ":"Free",
    "Link":"https:\/\/www.rsyslog.com\/downloads\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"freeradius",
    "Purpose":"High-performance and highly configurable free RADIUS server",
    "License Type ":"Free",
    "Link":"http:\/\/freeradius.net\/Downloads.html",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"samba-common",
    "Purpose":"Files used by both Samba servers and clients",
    "License Type ":"Free",
    "Link":"https:\/\/pkgs.org\/download\/samba-common",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"freerdp",
    "Purpose":"Remote Desktop Protocol client",
    "License Type ":"Free",
    "Link":"http:\/\/www.freerdp.com\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"amavisd",
    "Purpose":"Email filter with virus scanner and spamassassin support",
    "License Type ":"Free",
    "Link":"http:\/\/amavis.sourceforge.net\/download.php",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"perl-Razor-Agent",
    "Purpose":"Use a Razor catalogue server to filter spam messages",
    "License Type ":"Free",
    "Link":"https:\/\/centos.pkgs.org\/7\/epel-x86_64\/perl-Razor-Agent-2.85-15.el7.x86_64.rpm.html",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"spamassassin",
    "Purpose":"Spam filter for email which can be invoked from mail delivery agents",
    "License Type ":"Free",
    "Link":"https:\/\/sourceforge.net\/projects\/spamassassin\/",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"nessus",
    "Purpose":"Nessus Scanner",
    "License Type ":"Licensed",
    "Link":"https:\/\/docs.tenable.com\/nessus\/6_7\/Content\/DownloadNessus.htm",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"nginx",
    "Purpose":"small, powerful, scalable web\/proxy server",
    "License Type ":"Free",
    "Link":"http:\/\/nginx.net",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"tcpdump",
    "Purpose":"command-line network traffic analyzer",
    "License Type ":"Free",
    "Link":"http:\/\/www.tcpdump.org\/        ",
    "Remarks":null
  },
  {
    "Type":"Operating System",
    "Name":"MUI",
    "Purpose":"Windows package that allows user to select the Windows language.",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com",
    "Remarks":null
  },
  {
    "Type":"Plugin",
    "Name":"Cracklib Password Check Plugin",
    "Purpose":"To enforce the password strength in CM db servers",
    "License Type ":"Free",
    "Link":"https:\/\/mariadb.com\/kb\/en\/library\/cracklib-password-check-plugin\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"LibreOffice",
    "Purpose":"Office Suite",
    "License Type ":"Free",
    "Link":"https:\/\/www.libreoffice.org\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"OpenOffice",
    "Purpose":"Open-source office software suite",
    "License Type ":"Free",
    "Link":"https:\/\/www.openoffice.org\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Wps Office",
    "Purpose":"Free Office Suite",
    "License Type ":"Free",
    "Link":"https:\/\/www.wps.com\/download\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Adobe Reader",
    "Purpose":"PDF Document Reader",
    "License Type ":"Free",
    "Link":"https:\/\/acrobat.adobe.com\/us\/en\/acrobat\/pdf-reader.html?promoid=C4SZ2XDR&mv=other",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Microsoft Office",
    "Purpose":"Mircosoft Office Suite",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.microsoft.com\/en-us\/store\/d\/office-professional-2016\/cfq7ttc0k5f8?activetab=pivot:overviewtab",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Microsoft Visio",
    "Purpose":"Organizational Chart, Workflows",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.ecrater.com\/p\/30322707\/microsoft-visio-professional-2016-lifetime-license?keywords=microsoft+visio",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"WordWeb",
    "Purpose":"Free English dictionary and thesaurus",
    "License Type ":"Free",
    "Link":"https:\/\/wordweb.info\/free\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Foxit Reader",
    "Purpose":"PDF reader ",
    "License Type ":"Free",
    "Link":"https:\/\/www.foxitsoftware.com\/downloads\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Acrobat Update Helper",
    "Purpose":"PDF reader",
    "License Type ":"Free",
    "Link":"https:\/\/acrobat.adobe.com\/us\/en\/acrobat\/pdf-reader.html?promoid=C4SZ2XDR&mv=other",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Adobe Application",
    "Purpose":"Component of Adobe",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Adobe CEF",
    "Purpose":"Component of Adobe",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Adobe Desktop",
    "Purpose":"Component of Adobe",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"AdobeIPCBroker",
    "Purpose":"Component of Adobe",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"adobe_lic",
    "Purpose":"Component of Adobe",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Adobe Update",
    "Purpose":"Component of Adobe",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Creative Cloud",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Core Sync",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"CCXP",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"CORE_1_0_32",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"CORG_1_1_32",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"COPS_1_0_32",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"COCM_1_0_32",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"ACR_11_1",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"PHSP_20_0_1",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"CCXP_2_5_2",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"COSY",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Creative Cloud Desktop App",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"LogTransport2",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"AASIapp",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"AAM ",
    "Purpose":"Component of Adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"calibre",
    "Purpose":"Ebook reader for some of the programming books.",
    "License Type ":"Free",
    "Link":"https:\/\/calibre-ebook.com",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Flycut",
    "Purpose":"Clipboard app for MAC to store multiple cut items.",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/TermiT\/Flycut",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"GAuth Authenticator",
    "Purpose":"2 step verification",
    "License Type ":"Free",
    "Link":"https:\/\/itunes.apple.com\/us\/app\/google-authenticator\/id388497605?mt=8",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Adobe Acrobat Updater",
    "Purpose":"Component of Adobe",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"AAMLauncherUtil",
    "Purpose":"Component of Adobe",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":"macOS"
  },
  {
    "Type":"Productivity",
    "Name":"fluxgui",
    "Purpose":"Needed for blue screen glare reflection after sunset hours.",
    "License Type ":"Free",
    "Link":"https:\/\/justgetflux.com\/linux.html",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Text Expander",
    "Purpose":"Expanding predefined text in text editor and emails",
    "License Type ":"Licensed",
    "Link":"https:\/\/textexpander.com\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Default Folder",
    "Purpose":"Makes Open and Save dialogs work as quickly as you do",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.stclairsoft.com\/DefaultFolderX\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"CleanMyMac",
    "Purpose":"MAC cleaning tool",
    "License Type ":"Licensed",
    "Link":"https:\/\/macpaw.com\/cleanmymac-3",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Evernote - Free version",
    "Purpose":"Taking and storing notes",
    "License Type ":"Free",
    "Link":"https:\/\/evernote.com\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"tint2",
    "Purpose":"Open source taskbar for Linux",
    "License Type ":"Free",
    "Link":"https:\/\/pkgs.org\/download\/tint2",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Flux",
    "Purpose":"Control screen colour to suit your eyes",
    "License Type ":"Free",
    "Link":"https:\/\/justgetflux.com\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Grammarly",
    "Purpose":"grammar checker software",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.grammarly.com\/?q=brand&utm_source=google&utm_medium=cpc&utm_campaign=brand_f1&utm_content=229881030226&utm_term=grammarly%20for%20mac&matchtype=e&placement=&network=g&gclid=EAIaIQobChMIv-r32P6Z4AIVT6aWCh32EwaPEAAYASAAEgKG1fD_BwE",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"LockLizard",
    "Purpose":"PDF opening tool",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.locklizard.com\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"1Password",
    "Purpose":"Password management",
    "License Type ":"Licensed",
    "Link":"https:\/\/support.1password.com\/explore\/whats-new-mac\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Fantasticals",
    "Purpose":"Calendar utility",
    "License Type ":"Licensed",
    "Link":"https:\/\/flexibits.com\/fantastical",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Paste",
    "Purpose":"Copy past utility",
    "License Type ":"Licensed",
    "Link":"https:\/\/pasteapp.me\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Things 3",
    "Purpose":"Productivity Tool",
    "License Type ":"Licensed",
    "Link":"https:\/\/apps.apple.com\/us\/app\/things-3\/id904280696?mt=12",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Yoink",
    "Purpose":"File Explorer",
    "License Type ":"Licensed",
    "Link":"https:\/\/eternalstorms.at\/yoink\/mac\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"XQuartz",
    "Purpose":"develop a version of the X.Org X Window System",
    "License Type ":"Free",
    "Link":"https:\/\/www.xquartz.org\/",
    "Remarks":null
  },
  {
    "Type":"Programming Language",
    "Name":"Python",
    "Purpose":"Python is a programming language",
    "License Type ":"Free",
    "Link":"https:\/\/www.python.org\/downloads\/",
    "Remarks":null
  },
  {
    "Type":"Programming Language",
    "Name":"IDLE",
    "Purpose":"Installed by Python",
    "License Type ":"Free",
    "Link":"https:\/\/www.python.org\/downloads\/",
    "Remarks":null
  },
  {
    "Type":"Programming Language",
    "Name":"Python Launcher",
    "Purpose":"Python is a programming language",
    "License Type ":"Free",
    "Link":"https:\/\/www.python.org\/downloads\/",
    "Remarks":null
  },
  {
    "Type":"Programming Language",
    "Name":"PHP",
    "Purpose":"Server side scripting language",
    "License Type ":"Free",
    "Link":"http:\/\/www.php.net\/downloads.php",
    "Remarks":null
  },
  {
    "Type":"Programming Language",
    "Name":"Scala",
    "Purpose":"Development",
    "License Type ":"Free",
    "Link":"https:\/\/www.scala-lang.org\/",
    "Remarks":null
  },
  {
    "Type":"Programming Language",
    "Name":"DownloadX ActiveX",
    "Purpose":"Microsoft's object-oriented programming tool for IE",
    "License Type ":"Free",
    "Link":"https:\/\/download.cnet.com\/DownloadX-ActiveX-Download-Control\/3000-2206_4-10911713.html",
    "Remarks":null
  },
  {
    "Type":"Programming Language",
    "Name":"Node.js",
    "Purpose":"JavaScript runtime open source server environment.",
    "License Type ":"Free",
    "Link":"https:\/\/nodejs.org\/en\/",
    "Remarks":null
  },
  {
    "Type":"Programming Language",
    "Name":"R Project",
    "Purpose":"programming language",
    "License Type ":"Free",
    "Link":"https:\/\/www.r-project.org\/",
    "Remarks":null
  },
  {
    "Type":"Programming Language",
    "Name":"python2.7",
    "Purpose":"Interactive high-level object-oriented language (version 2.7)",
    "License Type ":"Free",
    "Link":"https:\/\/www.python.org\/downloads\/",
    "Remarks":null
  },
  {
    "Type":"Programming Language",
    "Name":"python3.5",
    "Purpose":"Interactive high-level object-oriented language (version 3.5)",
    "License Type ":"Free",
    "Link":"https:\/\/www.python.org\/downloads\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"SSH Secure Shell",
    "Purpose":"SSH ",
    "License Type ":"Free",
    "Link":"https:\/\/www.ssh.com\/ssh\/download\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"PuTTY",
    "Purpose":"Network file transfer application",
    "License Type ":"Free",
    "Link":"https:\/\/www.putty.org\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"OpenVPN",
    "Purpose":"Secure connection",
    "License Type ":"Free",
    "Link":"https:\/\/openvpn.net\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"OpenVPN Connect",
    "Purpose":"Secure connection",
    "License Type ":"Free",
    "Link":"https:\/\/openvpn.net\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"Uninstall OpenVPN Connect",
    "Purpose":"Secure connection",
    "License Type ":"Free",
    "Link":"https:\/\/openvpn.net\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"TAP-Windows 9.24.2",
    "Purpose":"Secure connection",
    "License Type ":"Free",
    "Link":"https:\/\/openvpn.net\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"Progeny Authenticator",
    "Purpose":"Progeny Authenticator is an application created by Progeny for 2 factor authentication for access to their application called 'Baby Trax 1.5",
    "License Type ":"Free",
    "Link":"https:\/\/dev.babytrax.net\/progenyauthenticator\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"MobaXterm",
    "Purpose":"Better tool for SSH from Windows machines. ",
    "License Type ":"Free",
    "Link":"https:\/\/mobaxterm.mobatek.net\/download.html",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"NordVPN IKE",
    "Purpose":"VPN connect",
    "License Type ":"Licensed",
    "Link":"https:\/\/nordvpn.com\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"TeamViewer",
    "Purpose":"Remote desktop software",
    "License Type ":"Free",
    "Link":"https:\/\/www.teamviewer.com\/en\/download\/windows\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"Tunnelblick",
    "Purpose":"OpenVPN VPN client server",
    "License Type ":"Free",
    "Link":"https:\/\/tunnelblick.net\/downloads.html",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"Viscosity",
    "Purpose":"OpenVPN VPN client server",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.ovpn.com\/en\/guides\/mac-viscosity",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"Microsoft Remote Desktop Beta",
    "Purpose":"Remote desktop software",
    "License Type ":"Free",
    "Link":"https:\/\/www.drivers.com\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"Microsoft Remote Desktop",
    "Purpose":"Remote desktop software",
    "License Type ":"Free",
    "Link":"https:\/\/www.drivers.com\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"openvpn",
    "Purpose":"virtual private network daemon",
    "License Type ":"Free",
    "Link":"http:\/\/www.openvpn.net\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection ",
    "Name":"Cisco AnyConnect ",
    "Purpose":"Provides VPN access through SSL and IPsec IKEv2",
    "License Type ":"Free",
    "Link":"https:\/\/www.cisco.com\/c\/en\/us\/support\/security\/anyconnect-secure-mobility-client-v4-x\/model.html",
    "Remarks":null
  },
  {
    "Type":"Remote Connection ",
    "Name":"vpndownloader",
    "Purpose":"Download Cisco vpn",
    "License Type ":"Free",
    "Link":"https:\/\/www.cisco.com\/c\/en\/us\/support\/security\/anyconnect-secure-mobility-client\/tsd-products-support-series-home.html",
    "Remarks":null
  },
  {
    "Type":"Revision Control",
    "Name":"CVS",
    "Purpose":"Version control system",
    "License Type ":"Free",
    "Link":"http:\/\/cvs.nongnu.org\/",
    "Remarks":null
  },
  {
    "Type":"Revision Control",
    "Name":"Git Bash",
    "Purpose":"Command line programs which allow you to interface with the underlying git progra",
    "License Type ":"Free",
    "Link":"https:\/\/git-scm.com\/downloads",
    "Remarks":null
  },
  {
    "Type":"Revision Control",
    "Name":"GIT ",
    "Purpose":"Software to handle project processes with efficiency and speed",
    "License Type ":"Free",
    "Link":"https:\/\/git-scm.com\/",
    "Remarks":null
  },
  {
    "Type":"Revision Control",
    "Name":"git",
    "Purpose":"Fast Version Control System",
    "License Type ":"Free",
    "Link":"https:\/\/git-scm.com\/",
    "Remarks":null
  },
  {
    "Type":"Revision Control",
    "Name":"Meld",
    "Purpose":"Compare files, directories, and version controlled projects",
    "License Type ":"Free",
    "Link":"http:\/\/meldmerge.org\/",
    "Remarks":"#96693"
  },
  {
    "Type":"Revision Control",
    "Name":"WinMerge",
    "Purpose":"differencing and merging tool for Windows",
    "License Type ":"Free",
    "Link":"http:\/\/winmerge.org\/",
    "Remarks":null
  },
  {
    "Type":"Revision Control",
    "Name":"subversion",
    "Purpose":"A Modern Concurrent Version Control System",
    "License Type ":"Free",
    "Link":"https:\/\/sourceforge.net\/projects\/subversion\/",
    "Remarks":null
  },
  {
    "Type":"Screenshot",
    "Name":"Snagit",
    "Purpose":"Take Screenshot",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.techsmith.com\/store\/snagit?utm_source=google&utm_medium=cpc&utm_campaign=1524774662&utm_content=58548122295&utm_term=snagit&gclid=EAIaIQobChMI78GU_fGi4QIVjLbICh25eA1kEAAYASAAEgL-dvD_BwE",
    "Remarks":null
  },
  {
    "Type":"Security",
    "Name":"EncryptMe",
    "Purpose":"Used for encryption in MAC",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.encrypt.me\/",
    "Remarks":null
  },
  {
    "Type":"Security",
    "Name":"GNU Privacy Assistant",
    "Purpose":"encrypt the client dump files using keys provided by different clients",
    "License Type ":"Free",
    "Link":"https:\/\/gnupg.org\/download\/",
    "Remarks":null
  },
  {
    "Type":"Security",
    "Name":"OWASP Zed Attack Proxy 2.7.0",
    "Purpose":"Rind security vulnerabilities in the web applications while developing and testing the application",
    "License Type ":"Free",
    "Link":"https:\/\/www.owasp.org\/index.php\/OWASP_Zed_Attack_Proxy_Project",
    "Remarks":null
  },
  {
    "Type":"Software Platform",
    "Name":"Java",
    "Purpose":"System for developing and deploying application software",
    "License Type ":"Free",
    "Link":"https:\/\/java.com\/en\/download\/",
    "Remarks":null
  },
  {
    "Type":"Software Platform",
    "Name":"JDK",
    "Purpose":"Java development kit",
    "License Type ":"Free",
    "Link":"https:\/\/www.oracle.com\/technetwork\/java\/javase\/downloads\/jdk8-downloads-2133151.html",
    "Remarks":null
  },
  {
    "Type":"Software Platform",
    "Name":"java-common",
    "Purpose":"Base package for Java runtimes",
    "License Type ":"Free",
    "Link":"https:\/\/java.com\/en\/download\/",
    "Remarks":null
  },
  {
    "Type":"Software Service ",
    "Name":"Google Update Helper",
    "Purpose":"Checks for software updates and automatically downloads and install ",
    "License Type ":"Free",
    "Link":"https:\/\/www.google.com\/about\/products\/",
    "Remarks":null
  },
  {
    "Type":"Sotware API SDK",
    "Name":"Dolby Audio X2 Windows API SDK",
    "Purpose":"Registry entry that runs on each Windows boot for all user logins",
    "License Type ":"Free",
    "Link":"https:\/\/www.dolby.com",
    "Remarks":null
  },
  {
    "Type":"Sotware Service ",
    "Name":"Google Update",
    "Purpose":"Keeps Google based software up to date",
    "License Type ":"Free",
    "Link":"https:\/\/www.google.co.in\/chrome\/index.html",
    "Remarks":null
  },
  {
    "Type":"Sync tool",
    "Name":"Rclone",
    "Purpose":"Syncing to team drive",
    "License Type ":"Free",
    "Link":"https:\/\/rclone.org\/",
    "Remarks":null
  },
  {
    "Type":"Terminal Program",
    "Name":"guake",
    "Purpose":"Terminal",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/Guake\/guake",
    "Remarks":null
  },
  {
    "Type":"Terminal Program",
    "Name":"iterm",
    "Purpose":"Terminal for Mac",
    "License Type ":"Free",
    "Link":"https:\/\/www.iterm2.com\/downloads.html",
    "Remarks":null
  },
  {
    "Type":"Terminal Program",
    "Name":"iTerm2",
    "Purpose":"Terminal for Mac",
    "License Type ":"Free",
    "Link":"https:\/\/iterm2.com\/downloads\/stable\/latest",
    "Remarks":null
  },
  {
    "Type":"Terminal Program",
    "Name":"MiniTerm",
    "Purpose":"Terminal Program",
    "License Type ":"Free",
    "Link":"https:\/\/gist.github.com\/bewest\/4632563",
    "Remarks":null
  },
  {
    "Type":"Testing Tool",
    "Name":"Katalon Studio",
    "Purpose":"Performing automated tests",
    "License Type ":"Free",
    "Link":"https:\/\/www.katalon.com\/",
    "Remarks":null
  },
  {
    "Type":"Text Editor",
    "Name":"Notepad++",
    "Purpose":"Editing text also used for source code edit",
    "License Type ":"Free",
    "Link":"https:\/\/notepad-plus-plus.org\/",
    "Remarks":null
  },
  {
    "Type":"Text Editor",
    "Name":"notepadqq",
    "Purpose":"Source code editor and Notepad replacement",
    "License Type ":"Free",
    "Link":"https:\/\/notepadqq.com\/s\/",
    "Remarks":null
  },
  {
    "Type":"Text Editor",
    "Name":"Sublime Text",
    "Purpose":"Editing text also used for source code edit",
    "License Type ":"Free",
    "Link":"https:\/\/www.sublimetext.com\/",
    "Remarks":null
  },
  {
    "Type":"Text Editor",
    "Name":"sublime-text        ",
    "Purpose":"Sublime Text 2        ",
    "License Type ":"Free",
    "Link":"https:\/\/www.sublimetext.com\/",
    "Remarks":null
  },
  {
    "Type":"Text Editor",
    "Name":"EDI notepad",
    "Purpose":"EDI file reader",
    "License Type ":"Free",
    "Link":"my ",
    "Remarks":null
  },
  {
    "Type":"Text Editor",
    "Name":"EmEditor",
    "Purpose":"Text Editor",
    "License Type ":"Free",
    "Link":"https:\/\/www.emeditor.com\/download\/",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Adobe Flash Player",
    "Purpose":"Used to view multimedia content",
    "License Type ":"Free",
    "Link":"https:\/\/www.adobe.com\/products\/flashplayer.html",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Adobe Refresh Manager",
    "Purpose":"Launch adobe softwares on boot through a Windows Schedule Task ",
    "License Type ":"Free",
    "Link":"https:\/\/www.adobe.com",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Adobe Shockwave Player",
    "Purpose":"Software plug-in for viewing multimedia and video games in web pages",
    "License Type ":"Free",
    "Link":"https:\/\/www.adobe.com\/products\/shockwaveplayer.html",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Google Input",
    "Purpose":"Input method editor to enter text in any of the supported languages",
    "License Type ":"Free",
    "Link":"https:\/\/www.google.com\/inputtools\/",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"adobe-flashplugin",
    "Purpose":"needed for web browser (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/get.adobe.com\/flashplayer\/",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"artha",
    "Purpose":"Needed as offline dictionary for English words (Ubuntu)",
    "License Type ":"Free",
    "Link":"http:\/\/artha.sourceforge.net\/wiki\/index.php\/Download",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"banshee",
    "Purpose":"Music Player (Ubuntu)",
    "License Type ":"Free",
    "Link":"http:\/\/banshee.fm\/download\/",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"banshee-extension-soundmenu",
    "Purpose":"Music Player (Ubuntu)",
    "License Type ":"Free",
    "Link":"http:\/\/banshee.fm\/download\/",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"clementine",
    "Purpose":"https:\/\/adoptopenjdk.net\/",
    "License Type ":"Free",
    "Link":"https:\/\/www.clementine-player.org\/downloads",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Spotify",
    "Purpose":"Music Player (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/www.spotify.com",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"cryptsetup",
    "Purpose":"disk encryption (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/packages.ubuntu.com\/trusty\/admin\/cryptsetup",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"cryptsetup-bin",
    "Purpose":"disk encryption (Ubuntu)",
    "License Type ":"Free",
    "Link":"https:\/\/packages.ubuntu.com\/trusty\/admin\/cryptsetup",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"audacity",
    "Purpose":"Audio editor.",
    "License Type ":"Free",
    "Link":"https:\/\/www.audacityteam.org\/download\/linux\/",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"audacity-data",
    "Purpose":"Audio editor.",
    "License Type ":"Free",
    "Link":"https:\/\/www.audacityteam.org\/download\/linux\/",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"KolourPaint",
    "Purpose":"Same as windows paint, a small image editing tool",
    "License Type ":"Free",
    "Link":"http:\/\/kolourpaint.org\/",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Application Verifier",
    "Purpose":"detect and help debug memory corruptions and critical security vulnerabilities",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=20028",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Color Cop",
    "Purpose":"free multi-purpose color picker",
    "License Type ":"Free",
    "Link":"http:\/\/colorcop.net\/license\/",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"mythes",
    "Purpose":"English thesaurus",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/hunspell\/mythes",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"madan-fonts",
    "Purpose":"Font for Nepali language",
    "License Type ":"Free",
    "Link":"https:\/\/download.com.np\/",
    "Remarks":null
  },
  {
    "Type":"Virtualization",
    "Name":"VMware",
    "Purpose":"For virtual machines",
    "License Type ":"Free",
    "Link":"https:\/\/my.vmware.com\/en\/web\/vmware\/evalcenter?p=free-esxi6",
    "Remarks":null
  },
  {
    "Type":"Vulnaribility Scanner",
    "Name":"Burp",
    "Purpose":"Web vulnerability scanner",
    "License Type ":"Licensed",
    "Link":"https:\/\/portswigger.net\/burp",
    "Remarks":null
  },
  {
    "Type":"Web based Development platform",
    "Name":"XAMPP",
    "Purpose":"Apache distribution containing MariaDB, PHP, and Perl",
    "License Type ":"Free",
    "Link":"https:\/\/www.apachefriends.org\/index.html",
    "Remarks":null
  },
  {
    "Type":"Web based Development platform",
    "Name":"connect",
    "Purpose":"Installed by XAMPP in mac",
    "License Type ":"Free",
    "Link":"https:\/\/www.apachefriends.org\/index.html",
    "Remarks":null
  },
  {
    "Type":"Web based Development platform",
    "Name":"Tomcat",
    "Purpose":"Implements Java Servlet, JavaServer Pages (JSP)",
    "License Type ":"Free",
    "Link":"http:\/\/tomcat.apache.org\/",
    "Remarks":null
  },
  {
    "Type":"Web based Development platform",
    "Name":"Apache",
    "Purpose":"Software to develop and maintain an open-source HTTP server",
    "License Type ":"Free",
    "Link":"https:\/\/httpd.apache.org\/",
    "Remarks":null
  },
  {
    "Type":"Web based Development platform",
    "Name":"Web Deploy",
    "Purpose":"Required for web deployment of  ASP.NET applications ",
    "License Type ":"Free",
    "Link":"https:\/\/www.iis.net\/downloads\/microsoft\/web-deploy",
    "Remarks":null
  },
  {
    "Type":"Web based Development platform",
    "Name":"IIS",
    "Purpose":"Microsoft's web server",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=48264",
    "Remarks":null
  },
  {
    "Type":"Web based Development platform",
    "Name":"Microsoft Web Platform Installer",
    "Purpose":"For adding Web Deploy component for IIS.",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/web\/downloads\/platform.aspx",
    "Remarks":null
  },
  {
    "Type":"Web based Development platform",
    "Name":"MAMP",
    "Purpose":"Local webserver",
    "License Type ":"Free",
    "Link":"https:\/\/www.mamp.info\/en\/downloads\/",
    "Remarks":null
  },
  {
    "Type":"Web based Service",
    "Name":"LastPass",
    "Purpose":"Web based password management service ",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.lastpass.com\/business-password-manager",
    "Remarks":null
  },
  {
    "Type":"Web Development platform",
    "Name":"WAMP",
    "Purpose":"Software stack to create web applications",
    "License Type ":"Free",
    "Link":"http:\/\/www.wampserver.com\/en\/",
    "Remarks":null
  },
  {
    "Type":"WebDriver and Remote Control",
    "Name":"Selenium ",
    "Purpose":"Selenium automates browsers",
    "License Type ":"Free",
    "Link":"https:\/\/www.seleniumhq.org\/download\/",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Microsoft Windows 10 ",
    "Purpose":"Operating System",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.microsoft.com\/en-gb\/evalcenter\/evaluate-windows-10-enterprise",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Microsoft Windows Server 2016",
    "Purpose":"Operating System",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.microsoft.com\/en-in\/evalcenter\/evaluate-windows-server-2016",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Office 16 Click-to-Run",
    "Purpose":"Mircrosoft Office installer",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.microsoft.com",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"osrss",
    "Purpose":"Microsoft update patch",
    "License Type ":"Free",
    "Link":"https:\/\/support.microsoft.com\/en-us\/help\/3159635\/windows-10-update-assistant",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Update KB",
    "Purpose":"Mircosoft periodic patches and updates",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.microsoft.com",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Windows 10 Update Assistant",
    "Purpose":"Windows 10 update assistant",
    "License Type ":"Free",
    "Link":"https:\/\/support.microsoft.com\/en-us\/help\/3159635\/windows-10-update-assistant",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Update for Windows",
    "Purpose":"Windows updates",
    "License Type ":"Free",
    "Link":"https:\/\/support.microsoft.com\/en-us\/help\/3159635\/windows-10-update-assistant",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Windows SDK",
    "Purpose":"Software development kits (SDKs) from Microsoft",
    "License Type ":"Free",
    "Link":"https:\/\/developer.microsoft.com\/en-us\/windows\/downloads\/windows-10-sdk",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Microsoft Help Viewer",
    "Purpose":"Offline help system (local help) developed by Microsoft",
    "License Type ":"Free",
    "Link":"https:\/\/docs.microsoft.com\/en-us\/visualstudio\/ide\/microsoft-help-viewer",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Microsoft MPI",
    "Purpose":"Microsoft implementation of the Message Passing Interface standard",
    "License Type ":"Free",
    "Link":"https:\/\/docs.microsoft.com\/en-us\/message-passing-interface\/microsoft-mpi",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Microsoft Application Error Reporting",
    "Purpose":"Crash reporting technology by Microsoft",
    "License Type ":"Free",
    "Link":"https:\/\/social.microsoft.com\/Forums\/en-US\/268910ec-9107-4c89-bb2a-7ded1b6a9ad6\/install-microsoft-application-error-reporting-tool?forum=crmdeployment",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Microsoft Portable Library",
    "Purpose":"Targeting Pack for Microsoft .NET Framework",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=27757",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Microsoft Windows Communication Foundation",
    "Purpose":"Framework for building service-oriented applications by Microsoft",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=21459",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Microsoft Build Tools",
    "Purpose":"Essential tools for building managed applications.",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=48159",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"SDK",
    "Purpose":"provides the latest headers, libraries, metadata, and tools for building Windows 10 apps",
    "License Type ":"Free",
    "Link":"https:\/\/developer.microsoft.com\/en-us\/windows\/downloads\/windows-10-sdk",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Microsoft Sync Framework Runtime",
    "Purpose":"enabling collaboration and offline scenarios for applications, services and devices",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=17616",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Windows App Certification",
    "Purpose":"test your app for Windows",
    "License Type ":"Free",
    "Link":"https:\/\/developer.microsoft.com\/en-us\/windows\/develop\/app-certification-kit",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Windows Software Development Kit",
    "Purpose":"provides the latest headers, libraries, metadata, and tools for building Windows 10 apps",
    "License Type ":"Free",
    "Link":"https:\/\/developer.microsoft.com\/en-us\/windows\/downloads\/windows-10-sdk",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Kits Configuration Installer",
    "Purpose":"provides the latest headers, libraries, metadata, and tools for building Windows 10 apps",
    "License Type ":"Free",
    "Link":"https:\/\/developer.microsoft.com\/en-us\/windows\/downloads\/windows-10-sdk",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"WinAppDeploy",
    "Purpose":"command line tool that can use to deploy a Universal Windows Platform (UWP) app from a Windows 10 PC",
    "License Type ":"Free",
    "Link":"https:\/\/winappdeploy.updatestar.com\/en",
    "Remarks":null
  },
  {
    "Type":"Windows Operating System",
    "Name":"Microsoft Web Platform Installer",
    "Purpose":"WebPI provides a simplified installation workflow for installing common open source web applications and web platform technologies",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/web\/downloads\/platform.aspx",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Chrysanth Cheque Writer [Free] for Nepal",
    "Purpose":"For check printing",
    "License Type ":"Free",
    "Link":"https:\/\/en.freedownloadmanager.org\/Windows-PC\/Chrysanth-Cheque-Writer-FREE.html",
    "Remarks":null
  },
  {
    "Type":"Printer Driver",
    "Name":"EPSON LQ-310 ESC\/P2 Printer Utility Uninstall",
    "Purpose":"Printer Driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.epson.com.sg\/Support\/Printers\/Dot-Matrix-Printers\/LQ-Series\/Epson-LQ-310\/s\/SPT_C11CC25301?review-filter=Windows+7+32-bit",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Windows Admin Center",
    "Purpose":"browser-based app for managing servers, clusters, hyper-converged infrastructure, and Windows 10 PCs",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/cloud-platform\/windows-admin-center",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Startups VMS",
    "Purpose":"remote connection for NVR",
    "License Type ":"Free",
    "Link":"http:\/\/muinintl.com\/downloads\/",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Cinema 4D R21",
    "Purpose":"package for all 3D artists (installed by adobe)",
    "License Type ":"Free",
    "Link":"https:\/\/www.maxon.net\/en-us\/support\/downloads\/",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"ACCFinderBundleLoader",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"CC Troubleshooter",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"CCXProcess",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Analyze Documents",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"ATFViewer",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"c4dpy",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Cineware",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Commandline",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Contact Sheets",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Export Flash Animation",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Make Calendar",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"naib",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Template",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Web Gallery",
    "Purpose":"installed by adobe",
    "License Type ":"Free",
    "Link":"https:\/\/www.cdw.com\/product\/Adobe-Acrobat-Standard-DC-Team-Licensing-Subscription-New-1-year-1-us\/3555347?RecommendedForEDC=4668011&RecoType=RP&cm_sp=Product-_-Session&ProgramIdentifier=3#PO",
    "Remarks":null
  },
  {
    "Type":"Management application",
    "Name":"RVM",
    "Purpose":"Command-line tool to manage ruby environments",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/rvm\/ubuntu_rvm",
    "Remarks":null
  },
  {
    "Type":"Management application",
    "Name":"Bundler",
    "Purpose":"Manages an application's dependencies through its entire life.",
    "License Type ":"Free",
    "Link":"https:\/\/rubygems.org\/gems\/bundler\/versions\/2.0.2",
    "Remarks":null
  },
  {
    "Type":"CCTV Camera Software ",
    "Name":"VMS",
    "Purpose":"For CCTV streaming and storing videos",
    "License Type ":"Free",
    "Link":"https:\/\/www.unifore.net\/analog-surveillance\/xmeye-for-windows-mac-pc-software-vms.html",
    "Remarks":null
  },
  {
    "Type":"CCTV Camera Software ",
    "Name":"CMS",
    "Purpose":"For CCTV streaming and storing videos",
    "License Type ":"Free",
    "Link":"https:\/\/www.unifore.net\/analog-surveillance\/xmeye-for-windows-mac-pc-software-vms.html",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Forcepoint DLP Endpoint",
    "Purpose":"Data Loss Prevention (DLP) tool",
    "License Type ":"Licensed",
    "Link":"https:\/\/support.forcepoint.com\/Login?startURL=%2FDownloads",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"FORCEPOINT ONE ENDPOINT",
    "Purpose":"Data Loss Prevention (DLP) tool",
    "License Type ":"Licensed",
    "Link":"https:\/\/support.forcepoint.com\/Login?startURL=%2FDownloads",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Forcepoint Decryption Utility",
    "Purpose":"Data Loss Prevention (DLP) tool",
    "License Type ":"Licensed",
    "Link":"https:\/\/support.forcepoint.com\/Login?startURL=%2FDownloads",
    "Remarks":null
  },
  {
    "Type":"Database ",
    "Name":"redis",
    "Purpose":"in-memory data structure store",
    "License Type ":"Free",
    "Link":"dbforge-sq-decrypter-3.1.24-installer_I0-B5J1.exe",
    "Remarks":null
  },
  {
    "Type":"Angular",
    "Name":"Angular ",
    "Purpose":"an app-design framework and development platform",
    "License Type ":"Free",
    "Link":"https:\/\/angular.io\/",
    "Remarks":null
  },
  {
    "Type":"IDE",
    "Name":"VisualVM",
    "Purpose":"All-in-One Java Troubleshooting Tool",
    "License Type ":"Free",
    "Link":"https:\/\/visualvm.github.io\/download.html",
    "Remarks":null
  },
  {
    "Type":"Webex Client",
    "Name":"voipclientmac",
    "Purpose":"Call with Comcast",
    "License Type ":"Free",
    "Link":"https:\/\/conferencebridge.comcast.com\/webexclients\/VoIP-Client-Mac-1.3.pkg.zip",
    "Remarks":null
  },
  {
    "Type":"Extension",
    "Name":"Adblock Plus",
    "Purpose":"Extension to block ads",
    "License Type ":"Free",
    "Link":"https:\/\/chrome.google.com\/webstore\/detail\/adblock-plus-free-ad-bloc\/cfhdojbkjhnklbpkdaibdccddilifddb",
    "Remarks":null
  },
  {
    "Type":"Network",
    "Name":"AlienVault",
    "Purpose":"Central log server",
    "License Type ":"Licensed",
    "Link":"https:\/\/cybersecurity.att.com\/",
    "Remarks":null
  },
  {
    "Type":"Project Management",
    "Name":"Merlin Project",
    "Purpose":"Project Management Tool",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.projectwizards.net\/en",
    "Remarks":null
  },
  {
    "Type":"Database ",
    "Name":"Rally",
    "Purpose":"to benchmark Elasticsearch",
    "License Type ":"Free",
    "Link":"https:\/\/esrally.readthedocs.io\/en\/stable\/",
    "Remarks":"#423838"
  },
  {
    "Type":"Productivity",
    "Name":"JProfiler",
    "Purpose":"Java application profiling tool",
    "License Type ":"Free",
    "Link":"https:\/\/www.ej-technologies.com\/download\/jprofiler\/files",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Profile Creator",
    "Purpose":"build configuration profiles using GUI",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/ProfileCreator\/ProfileCreator",
    "Remarks":"#474368"
  },
  {
    "Type":"Utility Software",
    "Name":"Apple configurator 2",
    "Purpose":"build configuration profiles using GUI",
    "License Type ":"Free",
    "Link":"https:\/\/apps.apple.com\/us\/app\/apple-configurator-2\/id1037126344?mt=12",
    "Remarks":null
  },
  {
    "Type":"Medicare",
    "Name":"Medicare Severity Grouper\/Medicare Code Editor (MSGMCE)",
    "Purpose":"compare the DRG-classification by SE-feature",
    "License Type ":"Free",
    "Link":"https:\/\/www.cms.gov\/files\/zip\/ms-drg-grouper-mce-v38-0-r1-icd-10-pc-software.zip",
    "Remarks":null
  },
  {
    "Type":"Medicare",
    "Name":"ESRD PC Pricer",
    "Purpose":"Allows to predict reimbursement to a renal dialysis facility",
    "License Type ":"Free",
    "Link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer\/ESRD_Pricer",
    "Remarks":null
  },
  {
    "Type":"Medicare",
    "Name":"Home Health Prospective Payment System (HH PPS) PC Pricer",
    "Purpose":"Medicare pricer",
    "License Type ":"Free",
    "Link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "Remarks":null
  },
  {
    "Type":"Medicare",
    "Name":"Hospice PPS PC Pricer",
    "Purpose":"Medicare pricer",
    "License Type ":"Free",
    "Link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "Remarks":null
  },
  {
    "Type":"Medicare",
    "Name":"Inpatient PPS PC Pricer",
    "Purpose":"Medicare pricer",
    "License Type ":"Free",
    "Link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "Remarks":null
  },
  {
    "Type":"Medicare",
    "Name":"Inpatient Psychiatric Facility Prospective Payment System (IPF PPS) PC Pricer",
    "Purpose":"Medicare pricer",
    "License Type ":"Free",
    "Link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "Remarks":null
  },
  {
    "Type":"Medicare",
    "Name":"Inpatient Rehabilitation Facility PPS PC Pricer",
    "Purpose":"Medicare pricer",
    "License Type ":"Free",
    "Link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "Remarks":null
  },
  {
    "Type":"Medicare",
    "Name":"Long-Term Care Hospital PPS PC Pricer",
    "Purpose":"Medicare pricer",
    "License Type ":"Free",
    "Link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "Remarks":null
  },
  {
    "Type":"Medicare",
    "Name":"Skilled Nursing Facilities (SNF PPS) PC Pricer",
    "Purpose":"Medicare pricer",
    "License Type ":"Free",
    "Link":"https:\/\/www.cms.gov\/Medicare\/Medicare-Fee-for-Service-Payment\/PCPricer",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"FortiClient",
    "Purpose":"Secure connection",
    "License Type ":"Free",
    "Link":"https:\/\/filestore.fortinet.com\/forticlient\/downloads\/FortiClientVPNOnlineInstaller_6.4.dmg",
    "Remarks":null
  },
  {
    "Type":"Testing Tool",
    "Name":"Stress stimulus",
    "Purpose":"A load, stress and performance testing tool for websites, web applications, web API and mobile apps of any complexity",
    "License Type ":"Free",
    "Link":"https:\/\/www.stresstimulus.com\/download",
    "Remarks":"#529691"
  },
  {
    "Type":"VPN",
    "Name":"Perimeter 81",
    "Purpose":"VPN client",
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"KACE",
    "Purpose":"Unified endpoint management",
    "License Type ":"Licensed",
    "Link":"https:\/\/kace1.gha-lan.net\/userui",
    "Remarks":"#564338"
  },
  {
    "Type":"Productivity",
    "Name":"Microsoft CRM",
    "Purpose":"Project Field is built on top of Microsoft CRM. CRM stands for customer relationship management. We cannot run Project Field without Microsoft CRM.",
    "License Type ":"Licensed",
    "Link":"https:\/\/s3.console.aws.amazon.com\/s3\/buckets\/dw-field?region=us-east-1&prefix=CGT+Software+Installs\/CRM2016\/&showversions=false",
    "Remarks":"Setup file was provided by CG"
  },
  {
    "Type":"Productivity",
    "Name":"Microsoft BizTalk",
    "Purpose":"Project Field needs Microsoft BizTalk in its workflow process. Without Microsoft, the workflow of Project Field will be incomplete. Microsoft BizTalk Server allows connecting diverse software, then graphically creating and modifying process logic that uses that software.\u00a0",
    "License Type ":"Licensed",
    "Link":"https:\/\/s3.console.aws.amazon.com\/s3\/buckets\/dw-field?region=us-east-1&prefix=CGT+Software+Installs\/&showversions=false",
    "Remarks":"Setup file was provided by CG"
  },
  {
    "Type":"Productivity",
    "Name":"Mongo DB Compass",
    "Purpose":"It is a GUI for connecting to the MongoDB. The MongoDB Compass allows you to make smarter decisions about document structure, querying, indexing, document validation, and more.\u00a0",
    "License Type ":"Free",
    "Link":"https:\/\/www.mongodb.com\/try\/download\/compass",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"Microsoft SQL Server 2016 Developer Edition",
    "Purpose":"This is a free version of Microsoft SQL Server for Development and QA environment",
    "License Type ":"Free",
    "Link":"https:\/\/s3.console.aws.amazon.com\/s3\/buckets\/dw-field?region=us-east-1&prefix=CGT+Software+Installs\/SQL+Intall+Files\/&showversions=false",
    "Remarks":"Setup file was provided by CG"
  },
  {
    "Type":"Development tool",
    "Name":"Silverlight",
    "Purpose":"Silverlight is a powerful development tool for creating engaging, interactive user experiences for Web and mobile applications. Silverlight is a free plug-in, powered by the .NET framework and compatible with multiple browsers, devices and operating systems, bringing a new level of interactivity wherever the Web works. Project Field will use Internet Explorer so this is a must.",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/Silverlight\/",
    "Remarks":null
  },
  {
    "Type":"EDI toolkit",
    "Name":"Framework EDI",
    "Purpose":"EDI parser and constructor",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.edidev.com\/",
    "Remarks":null
  },
  {
    "Type":"Reporting Tool",
    "Name":"Crystal Report 13",
    "Purpose":"Used in Project Valley",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.crystalreports.com\/reports\/",
    "Remarks":null
  },
  {
    "Type":"Reporting Tool",
    "Name":"SAP Crystal Reports",
    "Purpose":"Used in Project Valley",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.crystalreports.com\/reports\/",
    "Remarks":null
  },
  {
    "Type":"Reporting Tool",
    "Name":"EDIFRedi",
    "Purpose":"Used in Project Valley",
    "License Type ":"Licensed",
    "Link":"One drive location",
    "Remarks":null
  },
  {
    "Type":"Driver",
    "Name":"ExpressConnect Drivers & Services",
    "Purpose":"Dell Driver",
    "License Type ":"Free",
    "Link":"https:\/\/www.dell.com\/support\/home\/us\/en\/04\/drivers\/driversdetails?driverid=1jw07",
    "Remarks":null
  },
  {
    "Type":"VPN",
    "Name":"GlobalProtect",
    "Purpose":"To connect to office network",
    "License Type ":"Free",
    "Link":"https:\/\/docs.paloaltonetworks.com\/globalprotect\/4-1\/globalprotect-app-user-guide\/globalprotect-app-for-windows\/download-and-install-the-globalprotect-app-for-windows.html",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Microsoft Document Explorer 2008",
    "Purpose":"This is installed by Visual Studio 2008. It's the help viewer used with Visual Studio 2008.",
    "License Type ":"Free",
    "Link":null,
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Microsoft Sync Framework Services v1.0 SP1 (x64)",
    "Purpose":"Installed by Visual Studio. Microsoft Sync Framework is a comprehensive synchronization platform for enabling collaboration and offline scenarios for applications, services and devices.",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=17616",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Microsoft Team Foundation Server 2010 Object Model - ENU",
    "Purpose":"Installed by Visual Studio. Used for developing applications that integrate with TFS 2010.",
    "License Type ":"Free",
    "Link":"https:\/\/marketplace.visualstudio.com\/items?itemName=EdH-MSFT.TeamFoundationServer2010SP1ObjectModelInstaller",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Dotfuscator Software Services - Community Edition",
    "Purpose":"Installed with Visual Studio 2019. Used to harden, protect, and prune desktop, mobile, server, and embedded applications to help secure trade secrets and other intellectual property (IP), reduce piracy and counterfeiting, and protect against tampering and unauthorized debugging.",
    "License Type ":"Free",
    "Link":"https:\/\/www.preemptive.com\/products\/dotfuscator\/downloads",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"WCF RIA Services V1.0 SP2",
    "Purpose":"Installed by Visual Studio. The WCF RIA Services is a framework that provides a pattern to write application logic that runs on the mid-tier and controls access to data for queries, changes and custom.",
    "License Type ":"Free",
    "Link":"https:\/\/www.shouldiremoveit.com\/WCF-RIA-Services-V-SP2-11010-program.aspx",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Windows Phone 8.1 Emulators - ENU",
    "Purpose":"This is installed by Visual Studio. The Windows Phone 8.1 Emulators package provides emulator images for use with Visual Studio 2013 Update 2 or later.",
    "License Type ":"Free",
    "Link":null,
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Lenovo Quick Clean",
    "Purpose":"Installed by Lenovo. Lenovo Quick Clean application allows healthcare professionals to lock keyboard and mouse input so the laptop keyboard can be wiped down to sanitize the device. This is provided by default in the Lenovo laptop.This package updates the Lenovo Quick Clean application to fix problems, add new functions, or expand function.",
    "License Type ":"Free",
    "Link":"https:\/\/support.lenovo.com\/np\/en\/downloads\/ds540666-lenovo-quick-clean-for-windows-10-thinkpad",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"LINQ to XSD Preview Alpha 0.2",
    "Purpose":"Provide .NET developers with support for typed XML programming on top of LINQ to XML.",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-pk\/download\/search.aspx?q=visual+studio&p=2&r=10&t=1185&s=Relevancy%7EDescending&first=851",
    "Remarks":null
  },
  {
    "Type":"Open Source",
    "Name":"setroubleshoot-plugins.noarch",
    "Purpose":"This package provides a set of analysis plugins for use with setroubleshoot. Each plugin has the capacity to analyze SELinux AVC data and system data to provide user friendly reports describing how to interpret SELinux AVC denials.",
    "License Type ":"Free",
    "Link":"Centos Base Repo",
    "Remarks":null
  },
  {
    "Type":"Open Source",
    "Name":"setroubleshoot-server.x86_64",
    "Purpose":"Provides tools to help diagnose SELinux problems. When AVC messages are generated an alert can be generated that will give information about the problem and help track its resolution. Alerts can be configured to user preference. The same tools can be run on existing log files.",
    "License Type ":"Free",
    "Link":"Centos Base Repo",
    "Remarks":null
  },
  {
    "Type":"Open Source",
    "Name":"aide.x86_64",
    "Purpose":"AIDE (Advanced Intrusion Detection Environment) is a file integrity checker and intrusion detection program.",
    "License Type ":"Free",
    "Link":"Centos Base Repo",
    "Remarks":null
  },
  {
    "Type":"Open Source",
    "Name":"telnet.x86_64",
    "Purpose":"Telnet is a popular protocol for logging into remote systems over the Internet. The package provides a command line Telnet client",
    "License Type ":"Free",
    "Link":"Centos Base Repo",
    "Remarks":null
  },
  {
    "Type":"Propriotory",
    "Name":"amazon-ssm-agent.x86_64",
    "Purpose":"AWS Systems Manager Agent (SSM Agent) is Amazon software that can be installed and configured on an EC2 instance, an on-premises server, or a virtual machine (VM). SSM Agent makes it possible for Systems Manager to update, manage, and configure these resources. The agent processes requests from the Systems Manager service in the AWS Cloud, and then runs them as specified in the request. SSM Agent then sends status and execution information back to the Systems Manager service by using the Amazon Message Delivery Service (service prefix: ec2messages).",
    "License Type ":"Free",
    "Link":"https:\/\/docs.aws.amazon.com\/systems-manager\/latest\/userguide\/sysman-manual-agent-install.html",
    "Remarks":null
  },
  {
    "Type":"Propriotory",
    "Name":"newrelic-infra.x86_64",
    "Purpose":"Infrastructure Monitoring in New Relic provides deep visibility into your entire estate, in one place. Capture your hosts' health and performance along with the services, containers, and resources into your overall monitoring needs. This will provide the richest set of metrics, events, logs, and configuration changes for application troubleshooting context. With New Relic, you get observability to tame the complexity of operating your entire infrastructure.",
    "License Type ":"Licensed",
    "Link":"https:\/\/docs.newrelic.com\/docs\/using-new-relic\/cross-product-functions\/install-configure\/install-new-relic\/",
    "Remarks":null
  },
  {
    "Type":"Propriotory",
    "Name":"cloudhealth-agent.x86_64",
    "Purpose":"The CloudHealth Linux Agent allows us to collect instance-level metrics.",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/CloudHealth\/agent-install-helpers",
    "Remarks":null
  },
  {
    "Type":"Propriotory",
    "Name":"metricbeat.x86_64",
    "Purpose":"Metricbeat comes with internal modules that collect metrics from services like Apache, Jolokia, NGINX, MongoDB, MySQL, PostgreSQL, Prometheus, and more. Installation is easy, requiring absolutely zero dependencies. Just enable the modules you want in the configuration file.",
    "License Type ":"Free",
    "Link":"https:\/\/www.elastic.co\/downloads\/beats\/metricbeat",
    "Remarks":null
  },
  {
    "Type":"Open Source",
    "Name":"elasticsearch.x86_64",
    "Purpose":"Elasticsearch is the distributed, RESTful search and analytics engine at the heart of the Elastic Stack. You can use Elasticsearch to store, search, and manage data for: Logs, Metrics, A search backend, Application monitoring, Endpoint security and more!",
    "License Type ":"Free",
    "Link":"https:\/\/www.elastic.co\/downloads\/elasticsearch",
    "Remarks":null
  },
  {
    "Type":"Open Source",
    "Name":"mozjs17.x86_64",
    "Purpose":"JavaScript interpreter and libraries",
    "License Type ":"Free",
    "Link":"Centos Base Repo",
    "Remarks":null
  },
  {
    "Type":"SaaS, Data analytical tool",
    "Name":"Tableau",
    "Purpose":"Tableau report validation for ISAAC data refresh",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.tableau.com\/products\/desktop\/download",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"iMazing Profile Editor",
    "Purpose":"build configuration profiles using GUI",
    "License Type ":"Free",
    "Link":"https:\/\/imazing.com\/profile-editor",
    "Remarks":"#474368"
  },
  {
    "Type":"Migration Tool",
    "Name":"Prowfiz tool",
    "Purpose":"AD migration",
    "License Type ":"Free",
    "Link":"https:\/\/www.forensit.com\/Downloads\/Profwiz.msi",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"NUnit console",
    "Purpose":"This is a text-based runner for listing and running tests from the command line.",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/nunit\/nunit-console\/releases",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"dbForge SQL Decryptor",
    "Purpose":"For decrypting database objects.",
    "License Type ":"Free",
    "Link":"https:\/\/www.devart.com\/dbforge\/sql\/sqldecryptor\/download.html",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Kubectl",
    "Purpose":"The Kubernetes command-line tool, kubectl, allows you to run commands against Kubernetes clusters.",
    "License Type ":"Free",
    "Link":"https:\/\/docs.aws.amazon.com\/eks\/latest\/userguide\/install-kubectl.html",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"eksctl",
    "Purpose":"CLI tool for creating and managing clusters on EKS - Amazon's managed Kubernetes service for EC2",
    "License Type ":"Free",
    "Link":"https:\/\/docs.aws.amazon.com\/eks\/latest\/userguide\/eksctl.html",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Terraform CLI",
    "Purpose":"Infrastructure as code",
    "License Type ":"Free",
    "Link":"https:\/\/learn.hashicorp.com\/tutorials\/terraform\/install-cli",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Helm",
    "Purpose":"Package manager for Kubernetes",
    "License Type ":"Free",
    "Link":"https:\/\/www.eksworkshop.com\/beginner\/060_helm\/helm_intro\/install\/index.html",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"DOxygen",
    "Purpose":"Doxygen is the de facto standard tool for generating documentation from annotated C++ sources, but it also supports other popular programming languages such as C, Objective-C, C#",
    "License Type ":"Free",
    "Link":"https:\/\/www.doxygen.nl\/files\/doxygen-1.9.2-setup.exe",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"GraphViZ",
    "Purpose":"Graphviz is open source graph visualization software. Graph visualization is a way of representing structural information as diagrams of abstract graphs and networks.",
    "License Type ":"Free",
    "Link":"https:\/\/gitlab.com\/api\/v4\/projects\/4207231\/packages\/generic\/graphviz-releases\/2.49.0\/stable_windows_10_cmake_Release_x64_graphviz-install-2.49.0-win64.exe",
    "Remarks":null
  },
  {
    "Type":"Database",
    "Name":"RavenDB",
    "Purpose":"It is used as a database.",
    "License Type ":"Free",
    "Link":"https:\/\/ravendb.net",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Make SFX",
    "Purpose":"This is a free program that lets you make self-extracting archives under Windows (x86 & x64) platform.",
    "License Type ":"Free",
    "Link":"Make SFX (Self-extracting archive) (revocue.cz)",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"InstallShield",
    "Purpose":"InstallShield is a software tool for creating installers or software packages.",
    "License Type ":"Trial",
    "Link":"https:\/\/info.revenera.com\/is-eval-installshield-professional?lead_source=Website%20Visitor&id=Revenera.com",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"MS Visual Basic",
    "Purpose":"MS Access is a database management system used for creating business applications.",
    "License Type ":"Free",
    "Link":"https:\/\/drive.google.com\/file\/d\/0B2XHy_G4QwVid1lTME81UzlJcjQ\/view?resourcekey=0-jMkHvjhaMfEs_4Vl6FpE_Q",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"GraaVM",
    "Purpose":"a software which you may refer as JDK for java development.",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/graalvm\/graalvm-ce-builds\/releases",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Scoop",
    "Purpose":"the package installer for window.",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/ScoopInstaller\/Java",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Neoload",
    "Purpose":"Integrations with CI servers for Agile and DevOps, APM tools for code-level diagnostics, and functional testing tools for end-user experience metrics",
    "License Type ":"Trial",
    "Link":"https:\/\/www.neotys.com\/download-neoload-performance-testing-tool",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"VNC with TLS",
    "Purpose":"screen sharing software",
    "License Type ":"Free",
    "Link":"https:\/\/www.realvnc.com\/en\/connect\/download\/viewer\/",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"iClaimsDataExtractor",
    "Purpose":"CedarGate's internal desktop application to extract claims and charges along with the configurations for Bundle, AP\/AR and Fee schedules from the iClaims Database. ",
    "License Type ":"Licensed",
    "Link":"Cedar Gate",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Report Builder",
    "Purpose":"For generating reports by fetching data from Microsoft SQL Server database.",
    "License Type ":"Free",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=53613&e6b34bbe-475b-1abd-2c51-b5034bcdd6d2=True",
    "Remarks":null
  },
  {
    "Type":"PowerShell Module ",
    "Name":"PnP PowerShell",
    "Purpose":"perform complex actions in SharePoint",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/pnp\/powershell",
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":"through PowerShell script",
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":"Accounting",
    "Name":"Saral Billing",
    "Purpose":"to issue Computerized Invoice",
    "License Type ":"Licensed",
    "Link":"https:\/\/saral-billing.software.informer.com\/8.0\/",
    "Remarks":null
  },
  {
    "Type":"VS Code Extension",
    "Name":"TSQLLint",
    "Purpose":"It is used for describing, identifying, and reporting on undesirable patterns in TSQL scripts. This extension provides this functionality within VS Code.",
    "License Type ":"Free",
    "Link":"https:\/\/marketplace.visualstudio.com\/items?itemName=tsqllint.tsqllint&ssr=false#overview",
    "Remarks":null
  },
  {
    "Type":"Utility Dll",
    "Name":"Cryptosys Api",
    "Purpose":"This is used in CapCheck and Eligilibity manager for encryption",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.cryptosys.net\/api.html",
    "Remarks":null
  },
  {
    "Type":"Business Intelligence tool",
    "Name":"Power BI Desktop",
    "Purpose":"create interactive dashboards and reports",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.microsoft.com\/en-us\/download\/details.aspx?id=58494",
    "Remarks":null
  },
  {
    "Type":"Utility software",
    "Name":"Pingplotter",
    "Purpose":"Network Troubleshooting Tool",
    "License Type ":"Free",
    "Link":"https:\/\/www.pingplotter.com\/download\/",
    "Remarks":null
  },
  {
    "Type":"Open Source",
    "Name":"Linqpad",
    "Purpose":"LINQPad is a software utility targeted at .NET Framework and .NET Core development",
    "License Type ":"Free",
    "Link":"https:\/\/www.linqpad.net\/Download.aspx",
    "Remarks":null
  },
  {
    "Type":"Utility software",
    "Name":"SQL Prompt",
    "Purpose":"It develops tools for developers and data professionals and maintains community websites such as SQL Server Central and Simple Talk",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.red-gate.com\/products\/sql-prompt\/trial\/",
    "Remarks":null
  },
  {
    "Type":"Utility software",
    "Name":"KubeClarity",
    "Purpose":"KubeClarity is a tool for detection and management of Software Bill Of Materials (SBOM) and vulnerabilities of container images and filesystems. It scans both runtime K8s clusters and CI\/CD pipelines for enhanced software supply chain security.",
    "License Type ":"Free",
    "Link":"https:\/\/github.com\/openclarity\/kubeclarity",
    "Remarks":null
  },
  {
    "Type":"Windows Software",
    "Name":"HelpNDoc",
    "Purpose":"HelpNDoc is a Windows-based help authoring tool published by French company IBE Software.",
    "License Type ":"Free",
    "Link":"https:\/\/www.helpndoc.com\/download\/",
    "Remarks":null
  },
  {
    "Type":"Windows Software",
    "Name":"Advance Installer",
    "Purpose":"Advanced Installer is a Windows installer authoring tool for installing, updating, and configuring your products safely, securely, and reliably.",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.advancedinstaller.com\/download.html",
    "Remarks":null
  },
  {
    "Type":"Utility",
    "Name":"Aver Webcam Driver\u00a0",
    "Purpose":"Connect Aver camera to endpoint",
    "License Type ":"free",
    "Link":"https:\/\/www.aver.com\/download-center",
    "Remarks":null
  },
  {
    "Type":"Data",
    "Name":"AlertyX",
    "Purpose":"Alteryx Analytics Automation Platform delivers end-to-end automation of analytics, machine learning, and data science processes",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.alteryx.com\/designer-trial\/free-trial-alteryx",
    "Remarks":null
  },
  {
    "Type":"MS 365 addon",
    "Name":"PerfectIt",
    "Purpose":"PerfectIt is the leading add-in among professional editors, with thousands of editors around the world using it. PerfectIt locates errors that no spelling or grammar checker can find",
    "License Type ":"Licensed",
    "Link":"https:\/\/appsource.microsoft.com\/en-us\/product\/office\/wa104380773?tab=overview&exp=ubp8",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"DocumentConverter ",
    "Purpose":"Bulk convert your documents in seconds on Windows",
    "License Type ":"Free",
    "Link":"https:\/\/documentconverter.pro\/",
    "Remarks":null
  },
  {
    "Type":"Monitoring",
    "Name":"OpenMPI",
    "Purpose":"Used by Horovod to distribute the training process",
    "License Type ":"Free",
    "Link":"https:\/\/www.open-mpi.org\/",
    "Remarks":null
  },
  {
    "Type":"Utility",
    "Name":"NVDA Reader",
    "Purpose":"access to technology for blind and vision impaired people.",
    "License Type ":"Free",
    "Link":"https:\/\/www.nvaccess.org\/download\/",
    "Remarks":null
  },
  {
    "Type":"Utility",
    "Name":"Go Lang",
    "Purpose":null,
    "License Type ":"Free",
    "Link":"https:\/\/go.dev\/dl\/go1.21.0.windows-amd64.msi",
    "Remarks":null
  },
  {
    "Type":"Business Intelligence tool",
    "Name":"Power BI Connector for Jira",
    "Purpose":"Connect Jira to Power BI and build custom Jira reports easily",
    "License Type ":"Licensed",
    "Link":"https:\/\/marketplace.atlassian.com\/apps\/1221150\/power-bi-connector-for-jira?tab=overview&hosting=cloud&utm_source=google&utm_medium=cpc&utm_campaign=sn_pbi_jira_other&utm_vendorID=1216274&utm_term=jira%20power%20bi%20connector&hsa_acc=5924481196&hsa_cam=17867500517&hsa_grp=139060449283&hsa_ad=628724164541&hsa_src=g&hsa_tgt=kwd-859082026971&hsa_kw=jira%20power%20bi%20connector&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad=1&gclid=Cj0KCQiAuqKqBhDxARIsAFZELmIROsuW9is52SwmiaPDVwc45hLfMWfW3DXSzW7lRvKxOVW9rQZuZyAaAljhEALw_wcB",
    "Remarks":null
  },
  {
    "Type":"Basic Mac Software",
    "Name":"Mongo Cli",
    "Purpose":"Store data in flexible documents and develop applications designed to adapt and scale, backed by Atlas, a fully managed platform with always-on security and an ecosystem of tools and integrations.",
    "License Type ":"Free",
    "Link":"https:\/\/www.mongodb.com\/docs\/v4.4\/mongo\/",
    "Remarks":null
  },
  {
    "Type":"Utility Software",
    "Name":"Johns Hopkins ACG 13.0.1",
    "Purpose":"The ACG\u00ae System has been used in commercial and research settings worldwide, longer and more extensively than any other system on the market today. The software component is tried and true, continuously undergoing improvements and modifications in response to user needs.",
    "License Type ":"Licensed",
    "Link":"https:\/\/www.hopkinsacg.org\/document\/download-v13\/",
    "Remarks":null
  },
  {
    "Type":"Productivity",
    "Name":"DAX Studio",
    "Purpose":"DAX Studio is a free, open-source tool that helps in the authoring of DAX queries in Power BI and Power BI Report Builder and helps in DAX query profiling and performance analysis.It is governed by the Microsoft Reciprocal License (License | DAX Studio). The tool was created by Darren Gosbell (https:\/\/darren.gosbell.com\/about\/) and later donated to the public domain. The open source code is available at https:\/\/github.com\/daxstudio\/daxstudio.",
    "License Type ":"Free",
    "Link":"https:\/\/daxstudio.org\/downloads\/",
    "Remarks":null
  },
  {
    "Type":"Utility",
    "Name":"Colour Contrast Analyzer",
    "Purpose":"As a part of Analytics EA accessibility audit and changes, we are required to test the color contrast accessibility changes using tool 'Colour Contrast Analyzer'",
    "License Type ":"Free",
    "Link":"https:\/\/www.tpgi.com\/color-contrast-checker",
    "Remarks":null
  },
  {
    "Type":"VPN",
    "Name":"SonicWall NetExtender VPN",
    "Purpose":"SonicWall VPN Clients provide your employees safe, easy access to the data they need from any device",
    "License Type ":"Free",
    "Link":"https:\/\/www.sonicwall.com\/products\/remote-access\/vpn-clients\/",
    "Remarks":null
  },
  {
    "Type":"Development Tool",
    "Name":"Goland IDE",
    "Purpose":"GoLand is a powerful platform with many features designed specifically for Go developers.",
    "License Type ":"Free",
    "Link":"https:\/\/www.jetbrains.com\/go\/",
    "Remarks":null
  },
  {
    "Type":"Remote Connection",
    "Name":"SecureLink Connection Manager",
    "Purpose":"The SecureLink Connection Manager is a software tool designed to facilitate secure remote access to client systems and networks. ",
    "License Type ":"Free",
    "Link":"https:\/\/SecureLink.Trinity-Health.org",
    "Remarks":null
  },
  {
    "Type":"Utility",
    "Name":"irfanview",
    "Purpose":"image viewer, editor, organiser and converter program for Microsoft Windows",
    "License Type ":"Free",
    "Link":"https:\/\/www.irfanview.com\/",
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  },
  {
    "Type":null,
    "Name":null,
    "Purpose":null,
    "License Type ":null,
    "Link":null,
    "Remarks":null
  }

  // Add more items as needed
];
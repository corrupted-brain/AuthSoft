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
  }

  // Add more items as needed
];
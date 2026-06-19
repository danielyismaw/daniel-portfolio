export default function Experience() {
  return (
    <section id="experience" className="px-8 py-24 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10">Professional Experience</h2>

      <div className="space-y-10">
        <div>
          <h3 className="text-2xl font-semibold">
            Senior Wireless & Infrastructure Network Engineer
          </h3>
          <p className="text-cyan-400">Ethio Telecom | 2020 – Present</p>

          <ul className="text-gray-400 mt-3 list-disc ml-5 space-y-2">
            <li>Massive MIMO deployment across LTE/5G network sites</li>
            <li>
              Fiber backbone expansion and International Gateway optimization
            </li>
            <li>SD-WAN, MPLS, BGP, OSPF network operations</li>
            <li>VSAT installation and satellite communication systems</li>
            <li>Network troubleshooting using Wireshark and Zabbix</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Broadcast Technician</h3>
          <p className="text-cyan-400">Amhara Media Corporation | 2019</p>

          <ul className="text-gray-400 mt-3 list-disc ml-5 space-y-2">
            <li>TV and radio transmission system maintenance</li>
            <li>Live broadcast technical support and OB operations</li>
            <li>Signal monitoring and transmission fault recovery</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Freelance ICT Engineer</h3>
          <p className="text-cyan-400">Bahir Dar University | 2017–2018</p>

          <ul className="text-gray-400 mt-3 list-disc ml-5 space-y-2">
            <li>Computer hardware/software maintenance and repair</li>
            <li>LAN setup and structured cabling systems</li>
            <li>System optimization and cybersecurity support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { Clock, Calendar, ChevronRight, ArrowLeft, ArrowRight, Linkedin, Twitter, Facebook, Link2, Mail, List } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/logo-trucksonthemap.png";
import heroImg from "@/assets/blog/blog-hero-service.jpg";
import imgControl from "@/assets/blog/blog-visibility-control.jpg";
import imgDriver from "@/assets/blog/blog-driver-app.jpg";
import imgDock from "@/assets/blog/blog-dock-loading.jpg";
import imgHighway from "@/assets/blog/blog-highway-trucks.jpg";
import authorAvatar from "@/assets/blog/author-avatar.jpg";
import relatedImg1 from "@/assets/blog/blog-related-1.jpg";
import relatedImg2 from "@/assets/blog/blog-related-2.jpg";
import contentImg1 from "@/assets/blog/blog-content-1.jpg";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-[hsl(0,0%,100%)]">
      <Navbar />

      {/* Hero image — full width, behind transparent navbar */}
      <div className="w-full h-[50vh] min-h-[340px] max-h-[480px] relative">
        <img
          src={heroImg}
          alt="What Is Freight Visibility? A Complete Guide"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,5%)] via-[hsl(220,20%,5%)]/60 to-[hsl(220,20%,5%)]/40" />
      </div>

      {/* Main content area */}
      <div className="container max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 pt-12 pb-20">

          {/* ============ LEFT COLUMN — Article ============ */}
          <article>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[12px] font-body font-normal text-[hsl(220,10%,55%)] mb-6">
              <Link to="/blog" className="hover:text-[hsl(207,60%,30%)] transition-colors">Blog</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/blog" className="hover:text-[hsl(207,60%,30%)] transition-colors">Freight Visibility</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[hsl(220,15%,35%)]">Guide</span>
            </nav>

            {/* Title */}
            <h1 className="font-display font-extralight text-[hsl(220,20%,12%)] text-[32px] md:text-[40px] leading-[1.15] tracking-[-0.01em] mb-8">
              What Is Freight Visibility? A Complete Guide to Real-Time Tracking in European Road Freight
            </h1>

            {/* Author / Date / Reading Time bar */}
            <div className="flex flex-wrap items-center gap-6 pb-8 mb-10 border-b border-[hsl(220,12%,91%)]">
              <div className="flex items-center gap-3">
                <img src={authorAvatar} alt="Tamas Domonkos" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-[13px] font-body font-medium text-[hsl(220,20%,15%)]">Tamas Domonkos</p>
                  <p className="text-[11px] font-body font-normal text-[hsl(220,10%,55%)]">Logistics Expert</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[12px] font-body font-normal text-[hsl(220,10%,55%)]">
                <Calendar className="w-3.5 h-3.5" />
                March 5, 2026
              </div>
              <div className="flex items-center gap-1.5 text-[12px] font-body font-normal text-[hsl(220,10%,55%)]">
                <Clock className="w-3.5 h-3.5" />
                15 min read
              </div>
            </div>

            {/* Article body */}
            <div className="prose-custom" id="intro">
              <p>
                Freight visibility is the continuous, real-time awareness of where a shipment is, what condition it is in, what is likely to happen to it next, and why any deviation from the planned route or schedule has occurred. In European road freight, it means knowing the position and status of every truck, trailer, and consignment at any point between origin and destination, without making a single phone call to a driver or carrier.
              </p>

              <p>
                The definition sounds straightforward. The operational reality is not. Most European shippers, forwarders, and carriers work across multiple countries, dozens of carriers with different telematics systems, and a regulatory environment that changes at every border crossing. Achieving genuine freight visibility in that environment requires more than a tracking link. It requires a platform that unifies data from multiple sources, interprets that data against planned routes and time windows, and surfaces actionable intelligence rather than raw coordinates.
              </p>

              <p>
                This guide covers what freight visibility means in practice, how it works at a technical level, what distinguishes real-time visibility from basic track-and-trace, why it matters financially, and how European freight operations can implement it without replacing their existing TMS or ERP infrastructure.
              </p>

              <h2 id="track-trace">What Is the Difference Between Freight Visibility and Track-and-Trace?</h2>

              <p>
                Track-and-trace is a subset of freight visibility. It answers one question: where is the shipment right now? Freight visibility answers four questions: where is it, what is its current status, what will happen next, and what should we do about any deviations?
              </p>

              <p>
                The practical difference is the direction of information flow. Track-and-trace is reactive. A shipper or consignee queries a system or calls a carrier to find out where a load is. Freight visibility is proactive. The platform monitors all active shipments continuously, compares real positions against planned milestones, and alerts the relevant parties when a deviation is detected, before the consignee calls to ask why the truck has not arrived.
              </p>

              {/* Comparison table */}
              <div className="my-8 overflow-x-auto">
                <table className="w-full text-[13px] font-body font-normal border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[hsl(207,60%,30%)]">
                      <th className="text-left py-3 pr-4 text-[hsl(220,20%,15%)] font-medium">Capability</th>
                      <th className="text-left py-3 pr-4 text-[hsl(220,20%,15%)] font-medium">Track-and-Trace</th>
                      <th className="text-left py-3 text-[hsl(220,20%,15%)] font-medium">Freight Visibility Platform</th>
                    </tr>
                  </thead>
                  <tbody className="text-[hsl(220,10%,40%)]">
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">Position updates</td><td className="py-3 pr-4">On-demand query</td><td className="py-3">Continuous, automated</td></tr>
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">ETA calculation</td><td className="py-3 pr-4">Static schedule</td><td className="py-3">Dynamic, recalculated in real time</td></tr>
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">Exception detection</td><td className="py-3 pr-4">Manual check</td><td className="py-3">Automated alerts on deviation</td></tr>
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">Carrier data sources</td><td className="py-3 pr-4">Single carrier portal</td><td className="py-3">Multi-carrier aggregation</td></tr>
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">Milestone confirmation</td><td className="py-3 pr-4">Manual confirmation</td><td className="py-3">Automated against geofences</td></tr>
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">Predictive capability</td><td className="py-3 pr-4">None</td><td className="py-3">Delay prediction using historical and live data</td></tr>
                    <tr><td className="py-3 pr-4">Action trigger</td><td className="py-3 pr-4">User initiates</td><td className="py-3">Platform triggers alert to relevant party</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 id="how-it-works">How Does Real-Time Freight Visibility Work?</h2>

              <p>
                Real-time freight visibility platforms aggregate position and status data from three primary source layers: vehicle telematics units installed in trucks, mobile applications used by drivers, and carrier TMS integrations that push milestone data directly into the platform.
              </p>

              <h3>Vehicle Telematics and GPS Data</h3>

              <p>
                Modern trucks operating in the EU under tachograph regulations carry telematics hardware that transmits GPS position at intervals between 30 seconds and 5 minutes depending on the unit and configuration. Freight visibility platforms connect to these systems through direct integrations with telematics providers such as Webfleet, Samsara, Trimble, or through standardised APIs.
              </p>

              <blockquote>
                "A position update every 5 minutes means a truck travelling at 80 km/h can move 6.7 kilometres between updates. For time-critical deliveries into distribution centres with tight time slots, that resolution is often insufficient."
              </blockquote>

              <p>
                Better platforms supplement telematics data with driver app pings and geofence triggers that generate an event the moment a truck enters or exits a defined zone.
              </p>

              <h3>Driver Mobile Applications</h3>

              <p>
                For carriers that do not have telematics hardware installed, or for loads where the carrier is a small owner-operator without a fleet management system, driver applications provide an alternative data stream. The driver installs a lightweight app that transmits GPS position in the background, confirms loading and unloading events, and receives documents such as CMR forms and proof of delivery electronically.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                <div>
                  <img src={imgDriver} alt="Truck driver using mobile tracking application" className="w-full rounded-sm" />
                  <p className="text-[11px] text-[hsl(220,10%,55%)] mt-2 font-body font-normal italic">Driver mobile applications enable real-time tracking without telematics hardware.</p>
                </div>
                <div>
                  <img src={imgDock} alt="Distribution centre loading dock operations" className="w-full rounded-sm" />
                  <p className="text-[11px] text-[hsl(220,10%,55%)] mt-2 font-body font-normal italic">Geofence triggers at loading docks automate milestone confirmation.</p>
                </div>
              </div>

              <p>
                Driver adoption is the critical constraint on this approach. The most effective implementations use a link-based activation flow where the driver receives an SMS with a direct link to the active load, requires no account creation, and transmits position only during the active job.
              </p>

              <h3>Carrier TMS and EDI Integration</h3>

              <p>
                Larger carriers and logistics service providers operate their own transport management systems. These systems contain authoritative data on shipment status, driver assignments, departure times, and ETA calculations. Freight visibility platforms that integrate directly with carrier TMS infrastructure via EDI, REST API, or flat-file exchange receive richer data than GPS alone, including planned versus actual departure times, weight confirmations, and customs status for cross-border loads.
              </p>

              <p>
                The challenge in European road freight is carrier fragmentation. A shipper moving 500 loads per month across Central and Western Europe may work with 40 to 80 different carriers, each operating a different TMS or no TMS at all. A visibility platform must support heterogeneous integrations at scale, not just a clean API connection to one major carrier.
              </p>

              <h2 id="data-processed">What Data Does a Freight Visibility Platform Process?</h2>

              <p>
                Position data is the most visible input into a freight visibility platform, but it represents only one of several data streams required to produce accurate, actionable status information:
              </p>

              <ul>
                <li>GPS coordinates and timestamps from vehicle telematics or driver applications</li>
                <li>Planned route data including waypoints, border crossings, and expected milestone times</li>
                <li>Geofence events triggered when a vehicle enters or exits a defined location such as a shipper facility, carrier hub, or consignee address</li>
                <li>Driver activity data from digital tachographs, including driving time, rest periods, and availability windows</li>
                <li>Weather and traffic data used to refine ETA predictions on active corridors</li>
                <li>Customs and border crossing status for loads moving between EU member states and third countries including the UK, Switzerland, and Turkey</li>
                <li>Document events including CMR issue, proof of delivery capture, and discrepancy notifications</li>
                <li>Carrier capacity and load status confirmations transmitted through TMS integrations</li>
              </ul>

              <p>
                Processing this data into a usable visibility signal requires the platform to solve several classification problems simultaneously. A truck that has stopped moving may be at a planned waypoint, at a rest area complying with tachograph regulations, in a traffic queue, or broken down. Each scenario implies a different action, and a platform that cannot distinguish between them will generate excessive false-positive alerts, causing operations teams to ignore notifications over time.
              </p>

              <h2 id="eta-prediction">What Is ETA Prediction in Freight Visibility and How Accurate Is It?</h2>

              <p>
                Estimated time of arrival prediction is the most commercially valuable output of a freight visibility platform. A shipper who knows 3 hours in advance that a truck will be 2 hours late can rearrange dock scheduling, notify the consignee, and avoid a failed delivery. The same information delivered at the time the truck was supposed to arrive is useful only for post-event reporting.
              </p>

              <p>
                ETA accuracy depends on the inputs available and the methodology used to calculate it. Static ETA calculation takes the current GPS position and divides the remaining distance by an assumed average speed. This approach is simple but fails at motorway incidents, border crossings with variable queuing times, urban last-mile segments, and time slot constrained deliveries where early arrival is as problematic as late arrival.
              </p>

              <p>
                Dynamic ETA prediction uses a combination of current position, real-time traffic and incident data, historical performance data on the specific corridor and carrier, driver hours remaining under tachograph rules, and planned stop sequences. On high-frequency European corridors such as the Germany-Poland corridor on the A2, or the Netherlands-Germany-Austria axis on the A3 and A8, platforms with sufficient historical data can predict arrival times within a 15-minute window for 80 to 85 percent of loads.
              </p>

              <h3>What Factors Reduce ETA Accuracy in European Road Freight?</h3>

              <ul>
                <li><strong>Border crossing variability:</strong> Crossings at non-Schengen borders such as the UK-EU border at Dover, the Swiss border, and the Turkish border have queue times that can range from 30 minutes to several hours depending on day of week, declared goods category, and document compliance. No algorithm fully predicts this.</li>
                <li><strong>Driver hours compliance:</strong> Under EU Regulation 561/2006, drivers must take a 45-minute break after 4.5 hours of continuous driving. A load that was on schedule can fall behind by 45 minutes with no warning if the driver is approaching a mandatory rest.</li>
                <li><strong>Urban delivery windows:</strong> City centre deliveries in Paris, London, Amsterdam, and Brussels are subject to Low Emission Zone restrictions, loading bay time windows, and traffic prohibition periods. A platform without local rule data will produce an inaccurate ETA for the final segment.</li>
                <li><strong>Unplanned loading delays:</strong> If a truck waits 90 minutes for loading at origin beyond the scheduled departure time, the ETA for all subsequent stops shifts accordingly. Platforms that do not receive departure confirmation from origin will not detect this shift until position data shows the truck still at the loading facility.</li>
              </ul>

              <img src={imgHighway} alt="European freight trucks on highway corridor" className="w-full rounded-sm my-8" />
              <p className="text-[11px] text-[hsl(220,10%,55%)] -mt-4 mb-8 font-body font-normal italic">
                High-frequency European corridors where dynamic ETA prediction achieves the highest accuracy.
              </p>

              <h2 id="financial-impact">What Is the Financial Impact of Poor Freight Visibility?</h2>

              <p>
                The financial case for freight visibility investment is documented across multiple aspects of logistics operations. The direct costs of poor visibility are quantifiable in three categories: failed deliveries, excess inventory held as a buffer against unreliable ETAs, and carrier relationship degradation.
              </p>

              {/* Financial impact table */}
              <div className="my-8 overflow-x-auto">
                <table className="w-full text-[13px] font-body font-normal border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[hsl(207,60%,30%)]">
                      <th className="text-left py-3 pr-4 text-[hsl(220,20%,15%)] font-medium">Cost Category</th>
                      <th className="text-left py-3 pr-4 text-[hsl(220,20%,15%)] font-medium">Without Visibility</th>
                      <th className="text-left py-3 text-[hsl(220,20%,15%)] font-medium">With Visibility Platform</th>
                    </tr>
                  </thead>
                  <tbody className="text-[hsl(220,10%,40%)]">
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">Failed first-time deliveries</td><td className="py-3 pr-4">8 to 12% of shipments</td><td className="py-3">Below 3% with proactive rescheduling</td></tr>
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">Safety stock carrying cost</td><td className="py-3 pr-4">15 to 25 days cover</td><td className="py-3">7 to 14 days with reliable ETAs</td></tr>
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">Inbound call volume</td><td className="py-3 pr-4">High, carrier chasing</td><td className="py-3">Reduced by 60 to 70%</td></tr>
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">Detention and demurrage</td><td className="py-3 pr-4">Common, uncontrolled</td><td className="py-3">Reduced through early dock notification</td></tr>
                    <tr><td className="py-3 pr-4">Carrier performance disputes</td><td className="py-3 pr-4">Frequent, unresolved</td><td className="py-3">Data-supported resolution within 24 hours</td></tr>
                  </tbody>
                </table>
              </div>

              <blockquote>
                "For a European automotive component manufacturer receiving 40 shipments per day with an average load value of EUR 150,000, reducing safety stock from 20 to 12 days releases EUR 48 million in working capital."
              </blockquote>

              <p>
                Inventory carrying cost is the largest single financial driver behind freight visibility investment at scale. A manufacturing operation holding 20 days of safety stock because it cannot rely on supplier shipment ETAs is carrying a working capital cost proportional to the value of those additional days of inventory.
              </p>

              <p>
                The calculation is specific to each operation, but the directional finding is consistent across industries: the ROI on freight visibility investment is driven more by inventory reduction than by operational efficiency gains in the transportation team.
              </p>

              <h2 id="empty-miles">How Does Freight Visibility Reduce Empty Miles?</h2>

              <p>
                Empty miles are kilometres driven by a truck without a paying load. In European road freight, between 25 and 35 percent of all truck kilometres are driven empty. This figure represents a direct cost to carriers, a sustainability problem for the industry, and an inefficiency that freight visibility platforms are positioned to address.
              </p>

              <p>
                The connection between visibility and empty miles reduction operates through load matching. When a freight visibility platform has real-time data on where all vehicles in a carrier network are located, when each vehicle will complete its current load, and what capacity will be available where and when, it can match return loads with available capacity before the truck finishes unloading.
              </p>

              <p>
                Without visibility, a carrier dispatcher calls around to find a return load after the driver has confirmed delivery. By that point, the window for matching with a load departing from the consignee area may have already closed, and the truck drives empty back to its home base or to the next planned pickup.
              </p>

              <blockquote>
                "For a carrier operating 50 trucks with an average empty run of 180 kilometres, reducing the empty mile rate from 30 to 20 percent eliminates 900 empty kilometres per day. At EUR 1.20 per kilometre, that represents EUR 1,080 per day in recoverable margin."
              </blockquote>

              <h2 id="milestones">What Are Freight Milestones and Why Do They Matter for Visibility?</h2>

              <p>
                A freight milestone is a defined event in the lifecycle of a shipment that has commercial, contractual, or operational significance. Standard milestones in European road freight include collection confirmation, departure from origin, arrival at border crossing, clearance, arrival at destination, and proof of delivery.
              </p>

              <p>
                Milestone-based visibility is different from continuous GPS tracking. A shipper who receives automated confirmation of each milestone can manage customer communication and internal planning without monitoring a live map. A consignee who receives an automated notification when the truck departs origin can prepare the receiving dock without calling the carrier.
              </p>

              {/* Milestone table */}
              <div className="my-8 overflow-x-auto">
                <table className="w-full text-[13px] font-body font-normal border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[hsl(207,60%,30%)]">
                      <th className="text-left py-3 pr-4 text-[hsl(220,20%,15%)] font-medium">Milestone</th>
                      <th className="text-left py-3 pr-4 text-[hsl(220,20%,15%)] font-medium">Traditional Process</th>
                      <th className="text-left py-3 text-[hsl(220,20%,15%)] font-medium">With Visibility Platform</th>
                    </tr>
                  </thead>
                  <tbody className="text-[hsl(220,10%,40%)]">
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">Loading confirmation</td><td className="py-3 pr-4">Driver calls dispatcher</td><td className="py-3">Automated geofence trigger at shipper facility</td></tr>
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">Departure from origin</td><td className="py-3 pr-4">Dispatcher calls driver</td><td className="py-3">Automated on position movement from facility</td></tr>
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">Border crossing</td><td className="py-3 pr-4">Manual customs agent update</td><td className="py-3">Automated on geofence + customs API integration</td></tr>
                    <tr className="border-b border-[hsl(220,12%,91%)]"><td className="py-3 pr-4">Arrival at destination</td><td className="py-3 pr-4">Driver calls dispatcher</td><td className="py-3">Automated geofence trigger at consignee</td></tr>
                    <tr><td className="py-3 pr-4">POD capture</td><td className="py-3 pr-4">Paper CMR, faxed or emailed</td><td className="py-3">Digital capture through driver app, instant upload</td></tr>
                  </tbody>
                </table>
              </div>

              <p>
                Automated milestone confirmation has a secondary benefit beyond operational efficiency: it creates a timestamped data record that can be used in carrier performance reviews, customer SLA reporting, and dispute resolution. When a consignee claims a delivery was late and the carrier disputes it, a platform with geofence-based milestone data provides an objective timestamp that neither party can revise.
              </p>

              <h2 id="supply-chain-vs">What Is the Difference Between Freight Visibility and Supply Chain Visibility?</h2>

              <p>
                Supply chain visibility is a broader category that encompasses freight visibility as one component. Supply chain visibility includes upstream supplier readiness data, production status, warehouse inventory levels, freight in transit, customs status, and last-mile delivery confirmation. Freight visibility is specifically the in-transit segment.
              </p>

              <p>
                The distinction matters for technology selection. A shipper evaluating a freight visibility platform is solving a specific problem: they do not know what is happening to their loads while they are in transit with a carrier. A shipper evaluating a supply chain visibility platform is solving a broader problem: they lack confidence in any part of the end-to-end fulfilment process from supplier to customer.
              </p>

              <p>
                Most European mid-market shippers and forwarders need freight visibility specifically. They have warehouse management systems and procurement platforms. What they lack is the ability to see what is happening between the loading dock and the delivery address. A purpose-built freight visibility platform addresses this problem more directly and at lower cost than an enterprise supply chain visibility suite.
              </p>

              <h2 id="use-cases">Common Freight Visibility Use Cases in European Road Freight</h2>

              <p>
                Just-in-time manufacturing operations in the automotive sector operate with replenishment cycles measured in hours. A supplier delivering engine components to a German OEM assembly line needs to arrive within a 30-minute delivery window. If the truck is delayed, the assembly line stops. Freight visibility platforms connected to both the supplier and the OEM provide the OEM with a real-time ETA that triggers buffer management decisions before a line stoppage occurs.
              </p>

              <h3>Temperature-Controlled Pharmaceutical Freight</h3>

              <p>
                Pharmaceutical shippers moving active ingredients or finished products across Europe must maintain continuous temperature records and demonstrate chain of custody. Freight visibility platforms in this context connect to temperature monitoring devices in the trailer and flag deviations from the agreed temperature range in real time, allowing the shipper to make accept or reject decisions on load integrity before the consignee receives the goods.
              </p>

              <h3>E-Commerce Returns and Consumer Goods Replenishment</h3>

              <p>
                Retail distribution centres receiving multiple daily replenishment deliveries from different suppliers use freight visibility platforms to coordinate dock scheduling. Rather than requiring trucks to queue at a facility, the platform assigns arrival windows based on real-time ETA data, reducing truck waiting times at the dock and improving yard throughput.
              </p>

              <h3>UK-EU Cross-Border Post-Brexit</h3>

              <p>
                Since the end of the Brexit transition period, UK-EU freight movements require customs declarations in both directions. Delays at Dover, Folkestone, and Calais are unpredictable and have a material impact on delivery schedules. Freight visibility platforms monitoring UK-EU shipments provide both the shipper and consignee with early warning of border delays, allowing them to adjust receiving schedules or activate contingency stock.
              </p>

              <h3>Intermodal Road-Rail Connections</h3>

              <p>
                Shippers using intermodal services where road freight connects to rail or barge legs need to track the handover between transport modes. A truck arriving late at a rail terminal may miss the connection, requiring rerouting. Visibility platforms that monitor road legs in real time allow terminal operators to hold connections for loads confirmed as en route and within a recoverable time window.
              </p>

              <h2 id="integration">How Does a Freight Visibility Platform Integrate with Existing TMS and ERP Systems?</h2>

              <p>
                The question of integration is the primary technical barrier cited by logistics operations teams evaluating freight visibility platforms. Most shippers and forwarders already operate a TMS or ERP that holds shipment planning data. They do not want to re-enter that data into a visibility platform, and they want visibility events to flow back into their existing system of record.
              </p>

              <p>
                Mature freight visibility platforms support integration through four mechanisms: REST API for bidirectional data exchange with modern TMS platforms, EDI message formats including EDIFACT and X12 for legacy carrier systems, webhook delivery for event-driven notifications to external systems, and flat-file exchange via SFTP for organisations that cannot support API integration.
              </p>

              <p>
                The direction of data flow is typically bidirectional. The TMS sends shipment orders, carrier assignments, and planned route data to the visibility platform. The visibility platform sends position updates, milestone confirmations, and ETA revisions back to the TMS, where they are visible to operations teams working in their primary system.
              </p>

              <p>
                Integration timelines vary significantly by TMS vendor and internal IT resource availability. Connecting a modern cloud TMS via REST API typically requires 2 to 4 weeks of configuration work with no custom development. Integrating with a legacy on-premise TMS via EDI can take 8 to 16 weeks depending on the age of the system and the availability of documentation. Platforms that offer pre-built connectors for common TMS vendors including SAP Transportation Management, Oracle TMS, and specialist European platforms reduce integration timelines substantially.
              </p>

              <blockquote>
                "The critical question when evaluating a visibility platform is not whether integration is possible, but whether a pre-built connector exists for the specific TMS version in use."
              </blockquote>

              <h2 id="geofencing">What Is the Role of Geofencing in Freight Visibility?</h2>

              <p>
                Geofencing is the definition of a virtual boundary around a physical location, such that when a vehicle with an active tracking device enters or exits that boundary, the platform generates an event. In freight visibility, geofences serve two primary functions: automated milestone confirmation and dwell time measurement.
              </p>

              <p>
                When a geofence is placed around a shipper facility and a carrier drops trailer, the platform confirms loading start or departure without any manual input from the driver or dispatcher. The same logic applies at border crossings, intermediate hubs, and consignee facilities. A well-designed geofence infrastructure reduces the manual event confirmation workload on both the carrier and the shipper operations team to near zero for standard shipments.
              </p>

              <p>
                Dwell time measurement is the secondary value of geofencing. The platform records the timestamp when a truck enters a facility geofence and the timestamp when it exits. The difference is dwell time. For a shipper reviewing carrier performance, average dwell time at loading facilities is a leading indicator of loading process efficiency. For a carrier reviewing shipper facilities, dwell time data supports demurrage claims when trucks are detained beyond the agreed free time window.
              </p>

              <h2 id="carbon-reporting">Freight Visibility and Carbon Reporting</h2>

              <p>
                The EU Corporate Sustainability Reporting Directive (CSRD), which became applicable to large European companies from fiscal year 2024, requires Scope 3 emissions reporting including transport emissions from goods movements. Freight visibility platforms are a data source for this reporting because they hold the actual distance data for every shipment.
              </p>

              <p>
                Carbon calculation based on planned route distances systematically underestimates actual emissions because it does not account for detours, waiting time with engine running at facilities, and inefficient routing by carriers. Actual kilometre data from GPS tracking produces a more accurate emissions figure and, importantly, a figure that can be audited and verified by a third party.
              </p>

              <p>
                For forwarders and 3PLs that need to provide emissions reports to their shipper customers, freight visibility data enables automated emissions reporting at the shipment level. Each movement generates an actual distance figure, the platform applies an emission factor for the vehicle category, and the result is a per-shipment CO2 equivalent figure that can be aggregated for annual reporting.
              </p>

              <h2 id="evaluation">What Should You Look for When Evaluating a Platform?</h2>

              <p>
                The criteria for evaluating freight visibility platforms divide into four categories: data coverage, integration capability, alert quality, and commercial model.
              </p>

              <p>
                <strong>Data Coverage:</strong> Coverage means the percentage of active loads that the platform can track with reliable position data. A platform with 60 percent coverage leaves 40 percent of loads invisible, which is insufficient for operations teams that need complete situational awareness. Coverage is a function of carrier network connectivity: how many of the carriers you use are already connected to the platform, and what does the onboarding process look like for carriers that are not.
              </p>

              <p>
                <strong>Integration Capability:</strong> The platform must connect to your TMS without requiring a full-year integration project. Evaluate whether pre-built connectors exist for your specific TMS vendor and version, what the self-serve configuration options are, and what the vendor's typical integration timeline looks like for a similar-sized operation.
              </p>

              <p>
                <strong>Alert Quality:</strong> Alert quality is the ratio of actionable alerts to total alerts generated. A platform that generates 200 notifications per day for a mid-sized shipper, of which 140 are false positives, will be ignored within two weeks. Evaluate alert logic carefully: does the platform distinguish between a mandatory driver rest stop and an unplanned breakdown? Does it account for tachograph rules when calculating expected arrival?
              </p>

              <p>
                <strong>Commercial Model:</strong> Freight visibility platforms price on shipment volume, connected carrier count, user seats, or some combination of the three. For European operations with highly variable shipment volumes, a per-shipment model provides cost predictability. For operations with a stable carrier base but growing shipment volumes, a carrier connection fee model may be more economical. Clarify what happens to pricing if your volume grows 3x in year two.
              </p>

              <h2 id="trucksonthemap">How Does TrucksOnTheMap Deliver Freight Visibility?</h2>

              <p>
                TrucksOnTheMap is a freight visibility and load matching platform built specifically for European road freight. The platform connects shippers, forwarders, and carriers on a unified data layer that provides real-time position data, automated milestone confirmation, dynamic ETA calculation, and load matching for empty trucks.
              </p>

              <p>
                The platform operates across the primary intra-European freight corridors including the Germany-Poland corridor, UK-Continental Europe routes, Benelux distribution networks, and the Central and Eastern European automotive supply chain. Carriers connect through a combination of telematics integration, the TrucksOnTheMap driver application, and direct TMS connectivity for larger fleet operators.
              </p>

              <p>
                For shippers and forwarders evaluating freight visibility alongside empty miles reduction, TrucksOnTheMap provides both capabilities on a single platform. Visibility data on where trucks are and when they will complete deliveries feeds directly into the load matching logic, enabling carriers to receive return load offers before they finish unloading.
              </p>

              <blockquote>
                "Operations teams that currently spend significant time chasing carriers for status updates, managing inbound calls from consignees asking where loads are, and resolving carrier performance disputes without objective data are the primary users of the platform. The implementation timeline for standard TMS integrations is 2 to 4 weeks. Carriers without existing telematics connectivity are onboarded through the driver application with same-day activation."
              </blockquote>
            </div>

            {/* Share buttons */}
            <div className="flex items-center gap-4 pt-8 mt-10 border-t border-[hsl(220,12%,91%)]">
              <span className="text-[12px] font-body font-normal text-[hsl(220,10%,55%)] mr-2">Share this article</span>
              <a href="https://linkedin.com/shareArticle" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[hsl(220,12%,88%)] flex items-center justify-center text-[hsl(220,10%,45%)] hover:bg-[hsl(207,60%,30%)] hover:text-white hover:border-[hsl(207,60%,30%)] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[hsl(220,12%,88%)] flex items-center justify-center text-[hsl(220,10%,45%)] hover:bg-[hsl(207,60%,30%)] hover:text-white hover:border-[hsl(207,60%,30%)] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com/sharer/sharer.php" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[hsl(220,12%,88%)] flex items-center justify-center text-[hsl(220,10%,45%)] hover:bg-[hsl(207,60%,30%)] hover:text-white hover:border-[hsl(207,60%,30%)] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <button onClick={() => { navigator.clipboard.writeText(window.location.href); }} className="w-9 h-9 rounded-full border border-[hsl(220,12%,88%)] flex items-center justify-center text-[hsl(220,10%,45%)] hover:bg-[hsl(207,60%,30%)] hover:text-white hover:border-[hsl(207,60%,30%)] transition-colors">
                <Link2 className="w-4 h-4" />
              </button>
              <a href="mailto:?subject=What Is Freight Visibility?" className="w-9 h-9 rounded-full border border-[hsl(220,12%,88%)] flex items-center justify-center text-[hsl(220,10%,45%)] hover:bg-[hsl(207,60%,30%)] hover:text-white hover:border-[hsl(207,60%,30%)] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Author bio box */}
            <div className="mt-10 p-8 bg-[hsl(220,15%,96%)] rounded-sm">
              <div className="flex items-start gap-5">
                <img src={authorAvatar} alt="Tamas Domonkos" className="w-20 h-20 rounded-full object-cover shrink-0" />
                <div>
                  <p className="text-[15px] font-display font-light text-[hsl(220,20%,15%)] mb-1">Tamas Domonkos</p>
                  <p className="text-[12px] font-body font-normal text-[hsl(220,10%,55%)] leading-[1.8]">
                    Logistics expert with over 10 years of experience in European freight and transport operations. Passionate about technology-driven efficiency in modern logistics.
                  </p>
                </div>
              </div>
            </div>

            {/* Prev / Next navigation */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-[hsl(220,12%,91%)]">
              <Link to="/blog" className="flex items-center gap-2 text-[13px] font-body font-normal text-[hsl(220,10%,45%)] hover:text-[hsl(207,60%,30%)] transition-colors">
                <ArrowLeft className="w-4 h-4" /> Previous Post
              </Link>
              <Link to="/blog" className="flex items-center gap-2 text-[13px] font-body font-normal text-[hsl(220,10%,45%)] hover:text-[hsl(207,60%,30%)] transition-colors">
                Next Post <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          {/* ============ RIGHT COLUMN — Sidebar ============ */}
          <aside className="lg:pt-0">
            {/* Table of Contents — styled card */}
            <div className="mb-10 bg-[hsl(220,15%,97%)] border border-[hsl(220,12%,91%)] rounded-lg p-6">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-1 h-5 rounded-full bg-[hsl(207,60%,30%)]" />
                <h3 className="text-[13px] font-display font-light tracking-[0.1em] uppercase text-[hsl(220,20%,15%)]">In this article</h3>
              </div>
              <nav className="space-y-1">
                {[
                  { label: "Visibility vs Track-and-Trace", id: "#track-trace", num: "01" },
                  { label: "How Real-Time Visibility Works", id: "#how-it-works", num: "02" },
                  { label: "Data a Platform Processes", id: "#data-processed", num: "03" },
                  { label: "ETA Prediction and Accuracy", id: "#eta-prediction", num: "04" },
                  { label: "Financial Impact", id: "#financial-impact", num: "05" },
                  { label: "Reducing Empty Miles", id: "#empty-miles", num: "06" },
                  { label: "Freight Milestones", id: "#milestones", num: "07" },
                  { label: "Freight vs Supply Chain Visibility", id: "#supply-chain-vs", num: "08" },
                  { label: "Use Cases in European Freight", id: "#use-cases", num: "09" },
                  { label: "TMS and ERP Integration", id: "#integration", num: "10" },
                  { label: "Geofencing", id: "#geofencing", num: "11" },
                  { label: "Carbon Reporting and ESG", id: "#carbon-reporting", num: "12" },
                  { label: "Evaluating a Platform", id: "#evaluation", num: "13" },
                  { label: "TrucksOnTheMap", id: "#trucksonthemap", num: "14" },
                ].map(item => (
                  <a
                    key={item.id}
                    href={item.id}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-md text-[13px] font-body font-normal text-[hsl(220,10%,40%)] hover:bg-[hsl(207,60%,30%,0.08)] hover:text-[hsl(207,60%,30%)] transition-all group"
                  >
                    <span className="text-[11px] font-body font-medium text-[hsl(207,60%,30%)] opacity-50 group-hover:opacity-100 transition-opacity">{item.num}</span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* ===== CTA Sidebar — TrucksOnTheMap (sticky) ===== */}
            <div className="lg:sticky lg:top-28">
              <div className="bg-[hsl(207,30%,12%)] rounded-lg p-8 text-center">
                <img src={logo} alt="TrucksOnTheMap" className="h-5 mx-auto mb-5" />
                <p className="text-[20px] font-display font-extralight text-[hsl(0,0%,100%)] leading-[1.3] mb-3">
                  Take control of your freight operations
                </p>
                <p className="text-[12px] font-body font-normal text-[hsl(210,15%,65%)] leading-[1.7] mb-6">
                  Real-time visibility, dock scheduling, and predictive ETAs in one single platform built for European logistics.
                </p>
                <a
                  href="#contact"
                  className="inline-block w-full px-6 py-3 bg-[hsl(207,60%,30%)] text-[hsl(0,0%,100%)] text-[13px] font-body font-normal rounded-full hover:bg-[hsl(207,60%,35%)] transition-colors mb-3"
                >
                  Request a Demo
                </a>
                <a
                  href="#contact"
                  className="inline-block w-full px-6 py-3 border border-[hsl(0,0%,100%,0.2)] text-[hsl(0,0%,100%)] text-[13px] font-body font-normal rounded-full hover:bg-[hsl(0,0%,100%,0.05)] transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ============ "You may also like" Section ============ */}
      <section className="border-t border-[hsl(220,12%,91%)] bg-[hsl(0,0%,100%)]">
        <div className="container max-w-[1200px] mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-[28px] font-display font-extralight text-[hsl(220,20%,12%)] mb-10">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog" className="group">
              <div className="relative overflow-hidden rounded-sm mb-4">
                <img src={relatedImg1} alt="Fleet management innovations" className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-[hsl(220,20%,12%)] text-[hsl(0,0%,100%)] text-[11px] font-body font-normal rounded-sm">
                  Fleet Management
                </span>
              </div>
              <p className="text-[11px] font-body font-normal text-[hsl(220,10%,55%)] mb-2">March 1, 2026</p>
              <p className="text-[16px] font-display font-light text-[hsl(220,20%,12%)] group-hover:text-[hsl(207,60%,30%)] transition-colors leading-[1.4]">
                Innovative ideas for small businesses
              </p>
            </Link>

            <Link to="/blog" className="group">
              <div className="relative overflow-hidden rounded-sm mb-4">
                <img src={relatedImg2} alt="Data-driven logistics" className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-[hsl(220,20%,12%)] text-[hsl(0,0%,100%)] text-[11px] font-body font-normal rounded-sm">
                  Supply Chain
                </span>
              </div>
              <p className="text-[11px] font-body font-normal text-[hsl(220,10%,55%)] mb-2">Feb 20, 2026</p>
              <p className="text-[16px] font-display font-light text-[hsl(220,20%,12%)] group-hover:text-[hsl(207,60%,30%)] transition-colors leading-[1.4]">
                How data-driven decisions reshape logistics
              </p>
            </Link>

            <Link to="/blog" className="group">
              <div className="relative overflow-hidden rounded-sm mb-4">
                <img src={contentImg1} alt="Collaboration in logistics" className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-[hsl(220,20%,12%)] text-[hsl(0,0%,100%)] text-[11px] font-body font-normal rounded-sm">
                  Freight Visibility
                </span>
              </div>
              <p className="text-[11px] font-body font-normal text-[hsl(220,10%,55%)] mb-2">Feb 10, 2026</p>
              <p className="text-[16px] font-display font-light text-[hsl(220,20%,12%)] group-hover:text-[hsl(207,60%,30%)] transition-colors leading-[1.4]">
                Why real-time visibility is no longer optional
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Article styles */}
      <style>{`
        .prose-custom p {
          font-family: 'Roboto', system-ui, sans-serif;
          font-weight: 400;
          font-size: 14.5px;
          line-height: 2;
          color: hsl(220, 10%, 35%);
          margin-bottom: 1.5em;
          letter-spacing: 0.01em;
        }
        .prose-custom h2 {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 200;
          font-size: 26px;
          color: hsl(220, 20%, 12%);
          margin-top: 2.5em;
          margin-bottom: 1em;
          line-height: 1.25;
        }
        .prose-custom h3 {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 300;
          font-size: 19px;
          color: hsl(220, 18%, 18%);
          margin-top: 2em;
          margin-bottom: 0.8em;
          line-height: 1.35;
        }
        .prose-custom blockquote {
          border-left: 3px solid hsl(207, 60%, 30%);
          padding: 1em 0 1em 1.5em;
          margin: 2em 0;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 200;
          font-size: 18px;
          line-height: 1.7;
          color: hsl(220, 15%, 25%);
          font-style: italic;
        }
        .prose-custom img {
          display: block;
        }
        .prose-custom strong {
          font-weight: 500;
          color: hsl(220, 15%, 20%);
        }
        .prose-custom ul {
          list-style: none;
          padding: 0;
          margin: 1.5em 0;
        }
        .prose-custom ul li {
          font-family: 'Roboto', system-ui, sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.9;
          color: hsl(220, 10%, 35%);
          padding-left: 1.2em;
          position: relative;
          margin-bottom: 0.6em;
        }
        .prose-custom ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.7em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: hsl(207, 60%, 30%);
        }
      `}</style>
    </div>
  );
};

export default BlogPost;

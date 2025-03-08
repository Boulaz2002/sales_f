import React from "react";

export default function Resume() {
  return (
    <div className="flex ">
        <div className="max-w-2xl ml-auto bg-white shadow-lg p-8 border rounded-l-lg">
            <header className="text-left mb-10 border-b pb-4">
                <h1 className="text-3xl font-bold text-blue-700">Benjamin Boule Fogang</h1>
                <h2 className="text-xl text-gray-600 font-semibold">DevOps/Kubernetes Engineer</h2>
            </header>

            <section className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 border-b pb-2">Summary</h3>
                <p className="text-gray-700 mt-2">
                Results-driven DevOps & Kubernetes Engineer with 12 years of experience
 in designing, automating, and optimizing cloud-native infrastructure. Expertise in Kubernetes (EKS, AKS, RKE2, TANZU, OpenShift ), CI/CD, Terraform, Ansible, and cloud technologies. Passionate about scalability, security, and cloud automation. Proven ability to lead DevOps teams and implement cost-efficient, high-availability solutions in production environments.
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-semibold text-blue-700 border-b pb-2">Work Experience</h3>
                <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-800">Techsecom Consulting Group, Garland, TX</h4>
                    <p className="text-gray-600 font-semibold">Lead DevOps/Kubernetes Engineer (08/2022 - Present)</p>
                    <ul className="list-disc ml-5 text-gray-700 mt-2">
                        <li>Implemented Kubernetes (K8s) clusters for production environments, ensuring high availability and scalability across microservices.</li>
                        <li>Optimized CI/CD pipelines with Jenkins, GitLab CI, and ArgoCD, improving release efficiency and decreasing deployment failures.</li>
                        <li>Integrated monitoring and logging using Prometheus, Grafana, and ELK stack.</li>
                        <li>Enhanced Kubernetes networking with Istio Service Mesh, improving service discovery, security, and traffic management.</li>
                        <li>Managed infrastructure as code (IaC) using Terraform and Ansible, reducing provisioning time and ensuring consistency across environments.</li>
                        <li>Automated deployments using Helm and Kustomize, reducing deployment time and minimizing manual interventions.</li>
                        <li>Secured containerized applications by enforcing RBAC policies, implementing Pod Security Standards (PSS), and integrating image vulnerability scanning.</li>
                        <li>Optimized cloud costs on AWS/GCP by implementing auto-scaling policies, spot instance utilization, and storage lifecycle management.</li>
                    </ul>
                </div>
                <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-800">LPL Financial</h4>
                    <p className="text-gray-600 font-semibold">DevOps Engineer (03/2019 - 06/2022)</p>
                    <ul className="list-disc ml-5 text-gray-700 mt-2">
                        <li>Designedanddeployedproduction-gradeKubernetesclustersonEKS,RKE2,and GKE.</li>
                        <li>ImplementedGitOpsworkflowsusingArgoCDandHelm,reducingdeployment errors</li>
                        <li>AutomatedKubernetessecurityhardeningwithRBAC,Kyvernopolicies,andFalco intrusion detection.</li>
                        <li>Developedself-healingCI/CDpipelinesforDjango&Next.jsapplicationswith Jenkins & GitHub Actions.</li>
                    </ul>
                </div>
                <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-800">CIGNA HEALTH</h4>
                    <p className="text-gray-600 font-semibold">DevOps Engineer  (04/2014 - 01/2019)</p>
                    <ul className="list-disc ml-5 text-gray-700 mt-2">
                        <li>Assisted in CI/CD pipeline automation using Jenkins & GitLab CI/CD.</li>
                        <li>Deployed Dockerized applications and managed Kubernetes  YAMLconfigurations.</li>
                        <li>Provided Linux server administration and configured firewall & networking rules.</li>
                        <li>Gained hands-on experience with Terraform, Kubernetes, and AWS for DevOps automation.</li>
                    </ul>
                </div>
            </section>

        </div>
        <div className=" bg-blue-300 w-1/5 mr-auto rounded-r-lg">
            <section className="bg-gray-100 p-4 rounded-tr-lg">
                <h3 className="text-xl font-semibold text-blue-700 border-b pb-2">Contact</h3>
                <p className="text-gray-700 mt-2">📍 Maryland, USA</p>
                <p className="text-gray-700">📞 <span className="text-red-600 font-bold">301 675 9072</span></p>
                <p className="text-gray-700">📧 <a href="mailto:benjamin@boule.cloud" className="text-blue-500 underline">benjamin@boule.cloud</a></p>
            </section>
            <section className="bg-gray-100 p-4">
                <h3 className="text-xl font-semibold text-blue-700 border-b pb-2">Skills</h3>
                <div className="text-gray-700 mt-2">
                    <ul className="list-disc list-inside mt-2">
                        <li><strong>CI/CD Pipeline Development</strong></li>
                        <li><strong>K8s & Container Orchestration</strong></li>
                        <li><strong>IaC</strong> Terraform, Ansible</li>
                        <li><strong>Cloud Computing</strong> AWS, GCP, vSphere, Proxmox</li>
                        <li><strong>Network Configuration & Security</strong></li>
                        <li><strong>Automation & Scripting</strong> Bash, Python</li>
                        <li><strong>Service Mesh</strong> Istio, Cilium</li>
                    </ul>   
                </div>
            </section>
            <section className="bg-gray-100 p-4">
                <h3 className="text-xl font-semibold text-blue-700 border-b pb-2">Techniques</h3>
                <div className="text-gray-700 mt-2">
                    <ul className="list-disc list-inside mt-2">
                    <li>Agile & DevOps Methodologies</li>
                    <li>Virtualization & Hypervisors (Proxmox, VMware, KVM)</li>
                    <li>Containerization (Docker, Kubernetes, Helm)</li>
                    <li>Distributed Systems & Microservices</li>
                    <li>API Development & Management</li>
                    <li>System Administration & Performance Tuning</li>
                    </ul>
                </div>
            </section>
            <section className="bg-gray-100 p-4">
                <h3 className="text-xl font-semibold text-blue-700 border-b pb-2">Tools and Software</h3>
                <div className="text-gray-700 mt-2">
                    <ul className="list-disc list-inside mt-2">
                    <li><strong>Programming & Scripting:</strong> Python, Bash, C++</li>
                    <li><strong>Frontend Development:</strong> React.js, Next.js</li>
                    <li><strong>IaC:</strong> Terraform, Ansible</li>
                    <li><strong>CI/CD Tools:</strong> Jenkins, GitHub Actions, GitLab CI/CD</li>
                    <li><strong>Monitoring & Logging:</strong> Prometheus, Grafana, Elasticsearch (ELK)</li>
                    <li><strong>Version Control:</strong> Git, GitHub, GitLab</li>
                    </ul>
                </div>
            </section>
            <section className="bg-gray-100 p-4">
                <h3 className="text-xl font-semibold text-blue-700 border-b pb-2">Education</h3>
                <p className="text-gray-700 mt-2"><strong>University of Douala:</strong> Applied Science (Technology of Information) (10/2005 - 06/2010)</p>
                <p className="text-gray-700"><strong>University of Colorado:</strong> Master in Computer Science (03/2025 - Present)</p>
            </section>
        </div>
    </div>
  );
}

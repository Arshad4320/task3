import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer grid-rows-2 p-10 bg-slate-200">
                <div>
                    <span className="footer-title">LABELING TOOLS</span>
                    <a className="link link-hover">Image labeling</a>
                    <a className="link link-hover">Video labeling</a>
                    <a className="link link-hover">LiDAR labeling</a>
                    <a className="link link-hover">DICOM labeling</a>
                </div>
                <div>
                    <span className="footer-title">LABELING AUTOMATION</span>
                    <a className="link link-hover">AI-assisted labeling</a>
                    <a className="link link-hover">Custom labeling UI</a>
                    <a className="link link-hover">Labeling services</a>
                    <a className="link link-hover">Consulting services</a>
                </div>
                <div>
                    <span className="footer-title">DATA AND USERS</span>
                    <a className="link link-hover">Data management</a>
                    <a className="link link-hover">User collaboration</a>
                    <a className="link link-hover">Quality assurance</a>
                    <a className="link link-hover">Security & permissions</a>
                </div>
                <div>
                    <span className="footer-title">NEURAL NETWORKS</span>
                    <a className="link link-hover">Train, serve & apply</a>
                    <a className="link link-hover">Query and transform</a>
                    <a className="link link-hover">Visualize, analyze & improve</a>
                    <a className="link link-hover">Generate synthetic data</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">DATA AND USERS</span>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Github</a>
                </div>
                <div>
                    <span className="footer-title">NEURAL NETWORKS</span>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </div>
                <div>
                    <span className="footer-title">Apps</span>
                    <a className="link link-hover">Mac</a>
                    <a className="link link-hover">Windows</a>
                    <a className="link link-hover">iPhone</a>
                    <a className="link link-hover">Android</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
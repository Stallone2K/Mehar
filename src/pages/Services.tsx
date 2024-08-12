import Why from "../components/Services";
import Container from "../components/Container";
import FadeIn from "../components/FadeIn";
import Breadcrumb from "../components/Breadcrumb";
function Services() {
  return (
    <div>
      <Breadcrumb></Breadcrumb>
      <div>
        <Why></Why>

        <div className="bg-[#f2f2f2] p-6">
          <Container className="my-8">
            <FadeIn>
              <div className="mb-8">
                <h3 className="text-4xl font-bold">Recruitment:</h3>
                <p className="text-gray-500 my-2">
                  In today’s competitive job market, securing the right talent
                  is crucial to driving business success. At Mehar Consultants,
                  we specialize in connecting you with skilled professionals who
                  align with your company’s vision and values. Our recruitment
                  process is thorough and personalized, ensuring we find
                  candidates who are not only qualified but also a cultural fit
                  for your organization.
                </p>
                <ul className="list-disc ml-6 text-gray-500">
                  <li>
                    Understanding Your Needs: We take the time to understand
                    your business, culture, and specific job requirements.
                  </li>
                  <li>
                    Candidate Sourcing: Utilizing our extensive network and
                    advanced technology, we identify and attract top talent
                    across various industries.
                  </li>
                  <li>
                    Screening and Assessment: Each candidate undergoes rigorous
                    screening and assessment to ensure they meet your standards.
                  </li>
                  <li>
                    Interview Coordination: We handle all interview arrangements
                    and provide you with detailed feedback to streamline the
                    decision-making process.
                  </li>
                  <li>
                    Offer and Onboarding: From negotiating offers to onboarding,
                    we support you at every step to ensure a seamless hiring
                    experience.
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="mb-8">
                <h3 className="text-4xl font-bold">Staffing:</h3>
                <p className="text-gray-500 my-2">
                  Whether you require temporary staff for a short-term project
                  or permanent employees to join your team, Mehar Consultants
                  offers flexible staffing solutions tailored to your business
                  needs. Our experienced team understands the challenges of
                  workforce management and provides reliable staffing options to
                  help you maintain productivity and efficiency.
                </p>
                <ul className="list-disc ml-6 text-gray-500">
                  <li>
                    Temporary Staffing: Ideal for seasonal projects or filling
                    in for absent employees. We provide skilled professionals
                    ready to step in and contribute immediately.
                  </li>
                  <li>
                    Permanent Staffing: We assist in finding full-time employees
                    who are committed to your organization’s long-term success.
                  </li>
                  <li>
                    Contract Staffing: For specialized projects requiring niche
                    skills, our contract staffing services connect you with
                    experts on a project-by-project basis.
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="mb-8">
                <h3 className="text-4xl font-bold">Training:</h3>
                <p className="text-gray-500 my-2">
                  Investing in employee development is key to unlocking
                  potential and achieving organizational excellence. At Mehar
                  Consultants, we offer customized training programs designed to
                  enhance skills, improve performance, and foster leadership
                  within your team.
                </p>
                <ul className="list-disc ml-6 text-gray-500">
                  <li>
                    Onboarding Training: Ensure new hires are integrated
                    smoothly into your organization with our structured
                    onboarding programs.
                  </li>
                  <li>
                    Skill Development: From technical skills to soft skills, our
                    training sessions are tailored to meet the unique needs of
                    your team.
                  </li>
                  <li>
                    Leadership Development: Cultivate future leaders through our
                    specialized leadership training programs that focus on
                    strategic thinking, communication, and team management.
                  </li>
                </ul>
              </div>
            </FadeIn>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Services;

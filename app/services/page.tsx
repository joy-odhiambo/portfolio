import PageTransition from "@/components/page_transition";

const services = [
  {
    num: "01",
    title: "Recruitment and Onboarding",
    description:
      "Streamlining the hiring process by identifying top talent through targeted recruitment strategies and conducting efficient interview processes. Facilitating seamless onboarding experiences to integrate new hires into the organization effectively, ensuring they are equipped to the tools and knowledge needed for success.",
  },
  {
    num: "02",
    title: "Compliance",
    description:
      "Ensuring organizatinal adherence to labor laws, company policies and industry regulations. I specialize in maintaining accurate documentation, conducting regular internal audits and implementing best practices to fostrer a legally compliant and ethical workplace environment.",
  },
  {
    num: "03",
    title: "Perfomance Management",
    description:
      "Developing and implementing perfomance managment systems to align individual and team goals with organizational objectives. This includes setting clear perfomance standards, conducting evaluations, providing constructive and continous feedback and supporting professional development to enhance productivity and employee growth.",
  },
  {
    num: "04",
    title: "Employee Engagement",
    description:
      "Fostering a positive workplace culture by implementing strategies to enhance employee satisfaction, motivation and involvement. This includes organizing team building activities, creating feedback mechanism and promoting open communication to drive commitment and productivity.",
  },
  {
    num: "05",
    title: "HR Metrics & Analytics",
    description:
      "Leveraging data driven insights to measure and improve HR functions such as recruitment effectiveness, employee turnover and perfomance trends. By analyzing key metrics, I provide actionable recommendations to optimize workforce strategies and support organizational goals.",
  },
  {
    num: "06",
    title: "Health & Safety",
    description:
      "Promoting a safe and healthy workplace by developing and implementing policies, conducting risk assessments and ensuring compliance with occupational health and safety regulations. I also provide training and support to cultivate a culture of safety and wellbeing among the employees.",
  },
  {
    num: "07",
    title: "Employee Compensation and Benefits",
    description:
      "Designing and managing competitive compensation structures and benefits programs to attract, retain, and motivate top talent. This includes salary benchmarking, overtime and allowances and ensuring compliance with regulatory requirements while aligning with organizational budgets and goals.",
  },
  {
    num: "08",
    title: "Work-life Balance",
    description:
      "Creating initiatives and policies that support employees in achieving a healthy balance between their professional and personal lives. This includes flexible work arrangements, wellness programs, annual events, team building and fostering a supportive work environment to enhance overall job satisfaction and productivity.",
  },
  {
    num: "09",
    title: "Attendance and Leave Management",
    description:
      "Managing and tracking employee attendance and leave requests through efficient systems and processes. This includes managing different types of leaves and providing timely reports to maintain workforce productivity and minimize disruptions.",
  },
];

export default function Services() {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex flex-col justify-center xd:mt-40 xd:m-20 m-40 mb-0">
        <div className="container mx-auto">
          <div className="grid xd:grid-cols-1 grid-cols-2 gap-[60px]">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-1 flex-col gap-6 group justify-between"
                >
                  <div className="text-5xl font-extrabold text-outline text-transparent">
                    {service.num}
                  </div>

                  <h2 className="text-[42px] xd:text-[34px] font-bold leading-none text-white">
                    {service.title}
                  </h2>
                  <p className="text-base leading-8 text-white/60">
                    {service.description}
                  </p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

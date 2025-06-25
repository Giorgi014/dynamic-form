import { Button } from "../Buttons/Button";
import "./FormValue.scss";

const FormValue = () => {
  return (
    <div className="form_contaner">
      <h1>Student profile</h1>
      <form action="form section" className="form_section">
        <div className="full_name_cont input_containers">
          <label htmlFor="full name" className="full_name">
            Full name *
          </label>
          <input type="text" className="full_name" />
        </div>
        <div className="email_cont input_containers">
          <label htmlFor="email" className="email">
            Email *
          </label>
          <input type="email" className="email" />
        </div>
        <select name="country" id="country">
          <option value="ge">Geiorgia</option>
          <option value="ua">Ukraine</option>
        </select>
        <div className="phone_cont input_containers">
          <label htmlFor="phone" className="phone">
            Phone *
          </label>
          <input type="tel" className="phone" />
        </div>
        <div className="finished_years_cont input_containers">
          <label
            htmlFor="finished university years"
            className="finished_university_years"
          >
            Finished university years *
          </label>
          <input type="number" className="finished_university_years" />
        </div>

        {/* PRIMARY TECHNOLOGY CONTANER */}

        <article className="primary_technology_container outline_border">
          <h2>Primary technologies</h2>
          <section className="primary_technologies_cont">
            <div className="primary_cont inline_border">
              <div className="primary_input inline_inputs">
                <div className="technology_cont input_containers">
                  <label htmlFor="technology" className="technology">
                    Technology *
                  </label>
                  <input type="text" className="technology" />
                </div>
                <div className="experience_cont input_containers">
                  <label htmlFor="experience" className="experience">
                    Experience(years) *
                  </label>
                  <input type="number" className="experience" />
                </div>
              </div>
              <Button variant="remove">Remove</Button>
            </div>
            <Button variant="add">Add</Button>
          </section>
        </article>

        <div className="current_position_container input_containers">
          <label htmlFor="current position" className="urrent_position">
            Current position *
          </label>
          <input type="text" className="urrent_position" />
        </div>
        <div className="plans_container input_containers">
          <label htmlFor="current position" className="plans">
            Plans for the next year *
          </label>
          <input type="text" className="plans" />
        </div>

        {/* LINKS CONTANER */}

        <article className="links_container outline_border">
          <h2>Links</h2>
          <section className="links">
            <div className="github_cont input_containers">
              <label htmlFor="github" className="github">
                GitHub profile *
              </label>
              <input type="text" className="github" />
            </div>
            <div className="linkedin_cont input_containers">
              <label htmlFor="linkedin" className="linkedin">
                Linkedin profile
              </label>
              <input type="text" className="linkedin" />
            </div>
            <div className="public_cont input_containers">
              <label htmlFor="public" className="public">
                Public website
              </label>
              <input type="text" className="public" />
            </div>
            <div className="linkcv_cont input_containers">
              <label htmlFor="linkedin" className="linkedin">
                Link to CV
              </label>
              <input type="text" className="linkcv" />
            </div>
          </section>
        </article>

        {/* LINK TO YOUR PROJECTS CONTANER */}

        <article className="link_projects_container outline_border">
          <h2>Links to your projects</h2>
          <section className="link_projects">
            <div className="link_projects_cont inline_border">
              <div className="link_input inline_inputs">
                <div className="name_cont input_containers">
                  <label htmlFor="name" className="name">
                    Name *
                  </label>
                  <input type="text" className="name" />
                </div>
                <div className="link_cont input_containers">
                  <label htmlFor="link" className="link">
                    Link *
                  </label>
                  <input type="number" className="link" />
                </div>
              </div>
              <Button variant="remove">Remove</Button>
            </div>
            <Button variant="add">Add</Button>
          </section>
        </article>

        {/* SUBMIT BUTTON */}

        <Button variant="submit" style={{margin: "10px 0px"}}>Submit</Button>
      </form>
    </div>
  );
};

export default FormValue;

import { Button, Container, TextField, Typography } from "@mui/material";
import "./App.css";
import { createClient } from "@supabase/supabase-js";
import Footer from "./components/Footer";

function App() {
  const supabaseClient = createClient(
    import.meta.env.VITE_SUPA_URL,
    import.meta.env.VITE_SUPA_KEY
  );

  //some comment

  let val = "";

  async function askQuestion() {
    const { data, error } = await supabaseClient.functions.invoke(
      "ask-custom-data",
      {
        body: JSON.stringify({ query: val }),
      }
    );
    console.log(data);
    console.log(error);
    const answer = document.querySelector("#reply") as HTMLElement;
    answer.innerHTML = data.text;
  }

  return (
    <Container>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="left"
          style={{
            transition: "all 0.5s ease",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              margin: "10rem 0 0 0",
              color: "#2F0F5D",
              fontFamily: "'Chillax', sans-serif",
            }}
          >
            Hi, there
          </Typography>
          <Typography
            variant="h4"
            sx={{
              margin: "1rem 0 0 0",
              width: "600px",
              color: "#2F0F5D",
              fontFamily: "'Chillax', sans-serif",
              fontWeight: "500",
            }}
          >
            I may not be available everytime, but my AI powered bot can!
          </Typography>

          <TextField
            fullWidth={true}
            size="small"
            id="outlined-basic"
            label="Ask anything"
            variant="outlined"
            margin="normal"
            placeholder="e.g who is saubhagya?"
            sx={{ display: "block" }}
          />

          <Button
            onClick={() => {
              const inp = document.querySelector(
                "#outlined-basic"
              ) as HTMLInputElement;

              if (inp.value === "") {
                alert("Please enter a question");
              } else {
                const right = document.querySelector(".right") as HTMLElement;
                right.style.translate = "-600px ";
                const left = document.querySelector(".left") as HTMLElement;
                left.style.opacity = "0 ";
                const reply = document.querySelector(".reply") as HTMLElement;
                reply.style.opacity = "1 ";

                val = inp.value;

                askQuestion();
              }
            }}
            sx={{ margin: "0.5rem 0 0 0" }}
            variant="contained"
          >
            Submit
          </Button>
        </div>
        <div
          className="right"
          style={{
            transition: "all 1s ease",
          }}
        >
          <img
            src="src\assets\bot.png"
            alt="picture of a bot"
            style={{
              height: "40vh",
              width: "30vw",
              margin: "10rem 0 0 0",
              borderRadius: "1000px",
            }}
          />
          <div
            className="reply"
            style={{
              translate: "550px -300px",
              opacity: "0",
              transition: "all 1s ease 1s",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                margin: "1rem 0 0 0",
                width: "600px",
                color: "#2F0F5D",
                fontFamily: "'Chillax', sans-serif",
                fontWeight: "500",
              }}
            >
              <div id="reply">Loading..........</div>
            </Typography>
            <Button
              onClick={() => {
                const back = document.querySelector(".back") as HTMLElement;
                back.innerHTML = "loading...";
                const reply = document.querySelector(".reply") as HTMLElement;
                reply.style.opacity = "0 ";

                setTimeout(() => {
                  const right = document.querySelector(".right") as HTMLElement;
                  right.style.translate = "0px ";
                  setTimeout(() => {
                    const left = document.querySelector(".left") as HTMLElement;
                    left.style.opacity = "1 ";
                    back.innerHTML = "Back";
                    const answer = document.querySelector(
                      "#reply"
                    ) as HTMLElement;
                    answer.innerHTML = "Loading..........";
                  }, 1000);
                }, 2000);
              }}
              sx={{ margin: "2rem 0 0 30rem" }}
              variant="contained"
              size="large"
            >
              <div className="back">Back</div>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default App;

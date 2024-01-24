import { PostComponentType } from "@/components/Post";
import InsertCommentTwoToneIcon from "@mui/icons-material/InsertCommentTwoTone";
import {
  Card,
  CardProps,
  Divider,
  Step,
  StepIndicator,
  Stepper,
  Typography,
} from "@mui/joy";

export default function ThreadPost(props: Props) {
  const { rootPost, childPosts, ...cardProps } = props;
  const { title: rootPostTitle } = rootPost.props;

  return (
    <Card {...cardProps}>
      {rootPost}
      <Divider />
      <Stepper
        orientation="vertical"
        size="sm"
        sx={{
          "--StepIndicator-size": "28px",
          "--Step-connectorInset": "8px",
          "--Step-connectorThickness": "4px",
          "--Step-connectorRadius": "4px",
        }}
      >
        {childPosts.map((postComponent, index) => (
          <>
            <Step
              key={`step-${postComponent.props.id}`}
              indicator={
                <StepIndicator variant="plain" color="neutral">
                  <InsertCommentTwoToneIcon fontSize="small" />
                </StepIndicator>
              }
            >
              <Typography level="body-xs" color="neutral">
                {rootPostTitle} - {index + 2}/{childPosts.length + 1}
              </Typography>
              {postComponent}
            </Step>
          </>
        ))}
      </Stepper>
    </Card>
  );
}

type Props = {
  rootPost: PostComponentType;
  childPosts: PostComponentType[];
} & CardProps;
